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
app.use('/forgotten-password', authRoute);

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

describe('Password Reset', () => {
    const validEmail = 'charlotte@email.com';
    const invalidEmail = 'charley@email.com';
    let resetToken;

    describe('POST /forgotten-password/request-password-reset', () => {
        it('should generate a time sensitive reset token for a valid user email', async () => {
            const response = await request(app)
                .post('/forgotten-password/request-password-reset')
                .send({ email: validEmail });
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('token');
            expect(response.body).toHaveProperty('message', 'Token saved');
            resetToken = response.body.token;
        });

        it('should return 404 of an invalid user email', async () => {
            const response = await request(app)
                .post('/forgotten-password/request-password-reset')
                .send({ email: invalidEmail });
            expect(response.status).toBe(404);
            expect(response.body).toHaveProperty('message', 'User not found')
        });
    });

    describe('POST /forgotten-password/password-reset', () => {
        it('should reset the password with a valid token and new password', async () => {
            const newPassword = 'password123';
            const response = await request(app)
                .post('/forgotten-password/reset-password')
                .send({ token: resetToken, newPassword });
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'Password successfully reset')
        });
        it('should return 400 for an expired or invalid token', async () => {
            const newPassword = 'password123';
            const response = await request(app)
                .post('/forgotten-password/reset-password')
                .send({ token: 'invalid token', newPassword });
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('message', 'Password Reset Token is invalid or has expired');
        });
    });
});