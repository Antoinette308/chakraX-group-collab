/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
import request from 'supertest';
import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import connection from '../config/database.js';
// import route from route.js
import habitRoute from '../features/habitTracker-page/routes/habitTracker-route.js'

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

describe('GET /habit-tracker', () => {
    it('should return the welcome message', async () => {
        const response = await request(app).get('/habit-tracker');
        expect(response.status).toBe(200);
        expect(response.text).toBe('What are we tracking today?');
    });
});

describe('Habit-Tracker API', () => {
    describe('POST /habit-tracker/new-habit', () => {
        it('should create a new habit', async () => {
            const newHabit = { 
                habit_name: "practice coding skills", 
                description: "Use hackerrank to improve JavaScript knowledge base", 
                frequency: 1, 
                recurrence: "daily", 
                start_date: "2024-11-26"
            };
            const response = await request(app).post('/habit-tracker/new-habit').send(newHabit);
            expect(response.status).toBe(201);
            expect(response.body).toMatchObject(newHabit);
        });
    });

    describe('GET /habit-tracker/habit/:id', () => {
        it('should get a habit by its id', async () => {
            const id = 1;
            const response = await request(app).get(`/habit-tracker/habit/${id}`);
            expect(response.status).toBe(200);
        });
    });

    describe('PUT /habit-tracker/update-habit/:id', () => {
        it('should update a habit by its id', async () => {
            const id = 2;
            const updatedHabit = { 
                habit_name: "practice coding skills", 
                description: "Use leetcode to practice",
                frequency: 4,
                recurrence: "weekly" ,
                start_date: "2024-11-26"
            };
            const response = await request(app).put(`/habit-tracker/update-habit/${id}`).send(updatedHabit);
            expect(response.status).toBe(200);
        });
    });
    
    describe('DELETE /habit-tracker/delete-habit/:id', () => {
        it('should delete a habit by its id', async () => {
            const id = 4;
            const response = await request(app).delete(`/habit-tracker/delete-habit/${id}`);
            expect(response.status).toBe(200);
        })
    })
});