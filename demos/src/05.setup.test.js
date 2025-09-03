describe('set', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  test('case 1', () => {
    expect(new Set([1, 2, 3]).has(2)).toBe(true);
  });

  test('case 2', () => {
    expect(1 + 3).toBe(4);
  });
});
