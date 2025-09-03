// matchers
test('obj', () => {
  const data = { name: 'Daniel' };
  data.lastName = 'Muelas';

  expect(data).toEqual({ name: 'Daniel', lastName: 'Muelas' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toBe(true);
  expect(1).toBeTruthy();

  expect(false).toBe(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
});

test('strings', () => {
  expect('Daniel').toMatch(/iel/);
});

test('lists / arrays', () => {
  const data = ['apple', 'banana', 'cherry'];
  expect(data).toContain('banana');
  expect(data).toHaveLength(3);
});
