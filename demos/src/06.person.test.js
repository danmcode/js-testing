const Person = require('./06.person');

describe('Test for person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Dani', 75, 1.7); // Arrange
  });

  test('should return down', () => {
    person.weight = 45; // Arrange
    const imc = person.calcIMC(); // Act
    expect(imc).toBe('down'); // Assert
  });

  test('should return normal', () => {
    person.weight = 59;
    expect(person.calcIMC()).toBe('normal');
  });

  test('should return overweight', () => {
    person.weight = 75;
    expect(person.calcIMC()).toBe('overweight');
  });

  test('should return overweight level 1', () => {
    person.weight = 80;
    expect(person.calcIMC()).toBe('overweight level 1');
  });

  test('should return overweight level 2', () => {
    person.weight = 100;
    expect(person.calcIMC()).toBe('overweight level 2');
  });

  test('should return overweight level 3', () => {
    person.weight = 120;
    expect(person.calcIMC()).toBe('overweight level 3');
  });

  test('should return not found', () => {
    person.weight = -120;
    expect(person.calcIMC()).toBe('not found');
  });
});
