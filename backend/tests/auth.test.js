/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
import request from 'supertest';
import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import connection from '../config/database.js';
// import route from route.js
import authRoute from '../features/authentication/routes/auth-route.js';

const { json } = pkg;
const app = express();

app.use(json());
app.use(cors());
// app.use('/feature', featureRoute)
app.use('/habit-tracker', habitRoute);

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

describe('GET /accounts', () => {
    it('should return the welcome message', async () => {
        const response = await request(app).get('/accounts');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Log in or sign up for full access!');
    });
});

describe('Authentication/Accounts API', () => {
    describe()
})