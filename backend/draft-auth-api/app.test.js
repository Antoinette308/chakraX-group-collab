const request = require('supertest');
const app = require('../app.js');


describe('GET /accounts', () => {
    it('should return "Authentication API"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Authentication API');
    });
});