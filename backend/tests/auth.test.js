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
import dotenv from 'dotenv';

dotenv.config();

const { json } = pkg;
const app = express();

app.use(json());
app.use(cors());
// app.use('/feature', featureRoute)
app.use('/accounts', authRoute);

let server;
beforeAll((done) => {
    server = app.listen(done);
});
afterAll((done) => {
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

describe('Authentication/Accounts API', () => {
    // describe('POST /accounts/new-user', () => {
    //     it('should register new user information', async () => {
    //         const newUser = {
    //             email: "newusermail@test.com", // alter this for EVERY test!
    //             password: "password1"
    //         };
    //         const response = await request(app).post('/accounts/new-user').send(newUser);
    //         console.log('Test response body:', response.body);
    //         expect(response.status).toBe(201);
    //         expect(response.body.email).toBe(newUser.email);
    //     });
    // });
    describe('POST /accounts/login', () => {
        it('should log in an existing user', async () => {
            const existingUser = {
                email: "postman@test.com", // alter this for EVERY test!
                password: "password1"
            };
            const response = await request(app).post('/accounts/login').send(existingUser);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('token');
        });
    });

    // describe('GET /accounts/user-details', () => {
    //     let token;

    //     beforeAll(async () => {
    //         const loginResponse = await request(app).post('/accounts/login').send({
    //             email: "protectedUser1@email.com", // alter this for EVERY test!
    //             password: "password1"
    //         });
    //         token = loginResponse.body.token;
    //     });
    //     it('should return the user details for authenticated user', async () => {
    //         const response = await request(app)
    //             .get('/accounts/user-details')
    //             .set('Authorization', `Bearer ${token}`);
    //         expect(response.status).toBe(200);
    //         expect(response.body).toHaveProperty('email');
    //     });
    //     it('should return 401 for unauthenticated user', async () => {
    //         const response = await request(app).get('/accounts/user-details');
    //         expect(response.status).toBe(401);
    //     });
    // });

    // describe('PUT /accounts/update-user-details', () => {
    //     let token;
    //     beforeAll(async () => {
    //         const loginResponse = await request(app).post('/accounts/login').send({
    //             email: "protectedUser1@email.com", // alter this for EVERY test!
    //             password: "password1"
    //         });
    //         token = loginResponse.body.token;
    //     });
    //     it('should update user details for an authenticated user', async () => {
    //         const response = await request(app)
    //             .put('/accounts/update-user-details')
    //             .set('Authorization', `Bearer ${token}`)
    //             .send({ email: "protectedUser2@email.com", password: "password1" }); // alter this for EVERY test!
    //         expect(response.status).toBe(200);
    //         exppect(response.body).toHaveProperty('email', 'newUser1@email.com');
    //     });
    //     it('should return 401 for unauthenticated user', async () => {
    //         const response = await request(app)
    //             .put('/accounts/update-user-details')
    //             .send({ email: "protectedUser1@email.com", password: "password1" }); // alter email for EVERY test!
    //         expect(response.status).toBe(401);
    //     });
    // });

    // describe('DELETE /accounts/deactivate-account', () => {
    //     let token;

    //     beforeAll(async () => {
    //         const loginResponse = await request(app).post('/accounts/login').send({ 
    //             email: "newusermail@test.com", // alter this for EVERY test!
    //             password: "password1"
    //         });
    //         token = loginResponse.body.token;
    //     });

    //     it('should deactivate user account for authenticated user', async () => {
    //         const response = await request(app)
    //         .delete('/accounts/deactivate-account')
    //         .set('Authorization', `Bearer ${token}`)
    //         .send({ password: "password1" });
    //     expect(response.status).toBe(200)
    //     });

    //     it('should return 401 for unauthenticated user', async () => {
    //         const response = await request(app).delete('/accounts/deactivate-account').send({ password: "password" });
    //         expect(response.status).toBe(401);
    //     });
    // });

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
});