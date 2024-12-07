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

describe('POST /accounts/new-user', () => {
    it('should register new user information', async () => {
        const newUser = {
            email: "jestSupertest@test.com", // alter this for EVERY test!
            password: "password2"
        };
        const response = await request(app).post('/accounts/new-user').send(newUser);
        console.log('Test response body:', response.body);
        expect(response.status).toBe(201);
        expect(response.body.email).toBe(newUser.email);
    });
});