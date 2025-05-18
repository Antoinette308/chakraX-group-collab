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

describe('GET /accounts', () => {
    it('should return the welcome message', async () => {
        const response = await request(app).get('/accounts');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Log in or sign up for full access!');
    });
});


    /* ================================================================
        the following can be copied and altered for all protected endpoints 
    ================================================================ */

    /*describe('GET /accounts/protected', () => {
        let token;

        beforeAll(async () => {
            const loginResponse = await request(app).post('/accounts/login').send({ 
                email: "protectedtest@email.com",
                password: "password"
            });
            token = loginResponse.body.token;
        });

        it('should return the protected message for authenticated user', async () => {
            const response = await request(app)
                .get('/accounts/protected')
                .set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            expect(response.body.message).toBe('This is a protected route')
        });

        it('should return 401 for unauthenticated user', async () => {
            const response = await request(app).get('/accounts/protected');
            expect(response.status).toBe(401);
        });
    });*/
