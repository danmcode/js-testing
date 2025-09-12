const mockGetAll = jest.fn();

const request = require('supertest');
const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/books.fake');

jest.mock('../src/lib/mongo.lib', () => jest
    .fn()
    .mockImplementation(() => ({
        getAll: mockGetAll,
        createBooks: () => { }
    })));

describe('Test the books path', () => {
    let app = null;
    let server = null;

    beforeAll(() => {
        app = createApp();
        server = app.listen(3001);
    });

    afterAll(async () => {
        await server.close();
    });

    describe('GET /api/v1/books', () => {
        test('should return a lists books', async () => {

            // Arrange
            const fakeBooks = generateManyBooks(20);
            mockGetAll.mockResolvedValue(fakeBooks);

            // Act
            const response = await request(app).get('/api/v1/books');

            // Assert
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(fakeBooks);

        });
    });


});