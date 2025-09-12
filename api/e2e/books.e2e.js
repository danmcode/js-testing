const request = require('supertest');
const createApp = require('../src/app');
const { MongoClient } = require('mongodb');
const { config } = require('../src/config');

describe('Test the books path', () => {
    let app = null;
    let server = null;
    let database = null;

    beforeAll(async () => {
        app = createApp();
        server = app.listen(3005);

        const client = new MongoClient(config.dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await client.connect().then(() => {
            database = client.db(config.dbName);
        });
    });

    afterAll(async () => {
        await server.close();
        await database.dropDatabase();
    });

    describe('GET /api/v1/books', () => {
        test('should return a lists books', async () => {

            // Arrange
            const seedData = await database.collection('books').insertMany([
                { name: 'Book 1', year: 2020, author: 'Author 1' },
                { name: 'Book 2', year: 2021, author: 'Author 2' },
                { name: 'Book 3', year: 2022, author: 'Author 3' },
                { name: 'Book 4', year: 2022, author: 'Author 4' },
                { name: 'Book 5', year: 2022, author: 'Author 5' },
                { name: 'Book 6', year: 2022, author: 'Author 6' },
            ]);

            // Act
            const response = await request(app).get('/api/v1/books');

            // Assert
            expect(response.statusCode).toBe(200);
            expect(response.body.length).toEqual(seedData.insertedCount);

        });
    });


});