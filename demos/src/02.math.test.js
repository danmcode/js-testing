const { sum, multiply, divide } = require('./02.math');

test('adds 1 + 2 should be 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplies 2 * 3 should be 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divides 6 / 2 should be 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('should not divide by zero', () => {
  expect(divide(6, 0)).toBe(null);
});
