/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
import request from 'supertest';
import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import todoRoute from '../features/todo-page/routes/todo-routes.js';
import connection from '../config/database.js';

const { json } = pkg;
const app = express();

app.use(json());
app.use(cors());
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
        expect(response.text).toBe("What's on the agenda?");
    });
});

describe('Todo API', () => {
    describe('POST /todo/new-task', () => {
        it('should create a new todo', async () => {
            const newTodo = { tasks: "Wrestle this API into compliance", completed: false };
            const response = await request(app).post('/todo/new-task').send(newTodo);
            console.log('Response status:', response.status);
            console.log('Response body:', response.body);
            expect(response.status).toBe(201);
            expect(response.body).toMatchObject(newTodo);
        });
    });

    describe('GET /todo/all-tasks', () => {
        it('should return all todos', async () => {
            const response = await request(app).get('/todo/all-tasks');
            expect(response.status).toBe(200);
        });
    });

    describe('GET /todo/task/:id', () => {
        it('should return a todo by id', async () => {
            const id = 1;
            const response = await request(app).get(`/todo/task/${id}`);
            expect(response.status).toBe(200);
        });
    });

    describe('PUT /todo/update-task/:id', () => {
        it('should update a todo by id', async () => {
            const id = 2;
            const updatedTodo = { tasks: 'Strong arm Jest to accept ES6', completed: true };
            const response = await request(app).put(`/todo/update-task/${id}`).send(updatedTodo);
            expect(response.status).toBe(200);
        });
    });

    describe('DELETE /todo/delete-task/:id', () => {
        it('should delete a todo by id', async () => {
            const id = 1;
            const response = await request(app).delete(`/todo/delete-task/${id}`);
            expect(response.status).toBe(200);
        });
    });
});

