/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
import request from 'supertest';
import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import connection from '../../config/database.js';
// import route from route.js
import authRoute from '../../features/authentication/routes/auth-route.js';
import dotenv from 'dotenv';

dotenv.config();

const { json } = pkg;
const app = express();

app.use(json());
app.use(cors());
// app.use('/feature', featureRoute)
app.use('/accounts', authRoute);

let server;
beforeEach((done) => {
    server = app.listen(done);
});
afterEach((done) => {
    server.close(done);
});

beforeAll((done) => {
    connection.connect(done);
});

afterAll((done) => {
    connection.end((err) => {
        if (err) {
            console.error('Error terminating the database connection:', err);
        }
        done();
    });
});

describe('PUT /accounts/update-user-details', () => {
    let token;
    beforeAll(async () => {
        const loginResponse = await request(app).post('/accounts/login').send({
            email: "protectedUser1@email.com", // alter this for EVERY test!
            password: "password1"
        });
        token = loginResponse.body.token;
    });
    it('should update user details for an authenticated user', async () => {
        const response = await request(app)
            .put('/accounts/update-user-details')
            .set('Authorization', `Bearer ${token}`)
            .send({ email: "protectedUser2@email.com", password: "password1" }); // alter this for EVERY test!
        expect(response.status).toBe(200);
        exppect(response.body).toHaveProperty('email', 'newUser1@email.com');
    });
    it('should return 401 for unauthenticated user', async () => {
        const response = await request(app)
            .put('/accounts/update-user-details')
            .send({ email: "protectedUser1@email.com", password: "password1" }); // alter email for EVERY test!
        expect(response.status).toBe(401);
    });
});