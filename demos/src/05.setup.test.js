describe('set', () => {
  beforeAll(() => {
    console.log('Open database connection');
    // e.g initialize db connection
  });

  afterAll(() => {
    console.log('Close database connection');
    // e.g close db connection
  });

  beforeEach(() => {
    console.log('execute before each test case');
  });

  afterEach(() => {
    console.log('execute after each test case');
  });

  test('case 1', () => {
    expect(new Set([1, 2, 3]).has(2)).toBe(true);
  });

  test('case 2', () => {
    expect(1 + 3).toBe(4);
  });

  describe('other group', () => {
    beforeAll(() => {
      console.log('execute before all test cases in other group');
    });

    afterAll(() => {
      console.log('execute after all test cases in other group');
    });

    test('case 1', () => {
      expect(new Set([1, 2, 3]).has(2)).toBe(true);
    });

    test('case 2', () => {
      expect(1 + 3).toBe(4);
    });
  });
});
