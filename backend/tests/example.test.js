import request from 'supertest';
import express from 'express';
import exampleRoute from '../features/example/routes/example-routes.js'
// amend this to match your actual route
import connection from '../config/database.js';

const app = express();
app.use('/example', exampleRoute);

/* there are issues with the database connection not terminating!
It's continuing to try to import after the test environment has been torn down.
Not sure how elegant this is, but it was the easiest fix I found. */
beforeAll((done) => {
    connection.connect(done);
});

afterAll((done) => {
    connection.end((err) => {
        if (err) {
            console.error('Error terminating the database connection:', err);
        }
        done();
    })
})

describe('GET /example', () => {
    it('should return the welcome message', async() => {
        const response = await request(app).get('/example');
        expect(response.status).toBe(200);
        expect(response.text).toBe("This is an example!");
    });
})
