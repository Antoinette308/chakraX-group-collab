/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
import request from 'supertest';
import express from 'express';
import todoRoute from '../features/todo-page/routes/todo-routes.js';
import connection from '../config/database.js';

const app = express();
app.use('/todo', todoRoute);

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

describe('GET /todo', () => {
    it('should return the welcome message', async () => {
        const response = await request(app).get('/todo');
        expect(response.status).toBe(200);
        expect(response.text).toBe("What's on the agenda?")
    })
})
