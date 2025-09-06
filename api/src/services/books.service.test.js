const { generateManyBooks } = require('../fakes/books.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest
    .fn()
    .mockImplementation(() => ({
        getAll: mockGetAll,
        createBooks: () => { }
    })));

describe('Test for BookService', () => {
    let service;

    beforeEach(() => {
        service = new BooksService();
        jest.clearAllMocks(); // clear mocks before each test
    });

    describe('Test for getBooks method', () => {

        test('should return a book lists', async () => {
            // Arrange
            const fakeBooks = generateManyBooks(20);

            mockGetAll.mockResolvedValue(fakeBooks);

            // Act
            const books = await service.getBooks({});
            console.log(books);

            // Assert
            expect(books.length).toEqual(fakeBooks.length);
            expect(mockGetAll).toHaveBeenCalled();
            expect(mockGetAll).toHaveBeenCalledTimes(1);
            expect(mockGetAll).toHaveBeenCalledWith('books', {});
        });

        test('should return a name of book', async () => {
            // Arrange
            const fakeBooks = generateManyBooks(5);
            mockGetAll.mockResolvedValue(fakeBooks);

            // Act
            const books = await service.getBooks({});
            console.log(books);

            // Assert
            expect(books[0].name).toEqual(fakeBooks[0].name);

        });
    });

});
