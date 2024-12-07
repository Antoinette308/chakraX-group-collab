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

describe('DELETE /accounts/deactivate-account', () => {
    let token;

    beforeAll(async () => {
        const loginResponse = await request(app).post('/accounts/login').send({ 
            email: "newusermail@test.com", // alter this for EVERY test!
            password: "password1"
        });
        token = loginResponse.body.token;
    });

    it('should deactivate user account for authenticated user', async () => {
        const response = await request(app)
        .delete('/accounts/deactivate-account')
        .set('Authorization', `Bearer ${token}`)
        .send({ password: "password1" });
    expect(response.status).toBe(200)
    });

    it('should return 401 for unauthenticated user', async () => {
        const response = await request(app).delete('/accounts/deactivate-account').send({ password: "password" });
        expect(response.status).toBe(401);
    });
});
