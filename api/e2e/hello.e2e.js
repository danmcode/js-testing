const request = require('supertest');
const createApp = require('../src/app');

describe('Test the hello world path', () => {
    let app = null;
    let server = null;

    beforeAll(() => {
        app = createApp();
        server = app.listen(3001);
    });

    afterAll(async () => {
        await server.close();
    });

    describe('GET /', () => {
        test('should return a 200 response', async () => {
            const response = await request(app).get('/');
            expect(response.statusCode).toBe(200);
            expect(response.text).toEqual('Hello World!');
        });
    });


});