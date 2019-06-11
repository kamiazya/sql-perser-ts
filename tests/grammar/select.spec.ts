import { parse } from '../../src/grammar/sql';

describe('SELECT statement', () => {
  describe('not to throw error', () => {
    const testCases = [
      'SELECT * FROM users',
      'SELECT * FROM users;',
      'SELECT * FROM users1',
      'SELECT id, name AS n FROM users',
      'SELECT id, name AS n FROM users as us left join user_detail on detail.user_id = us.id',
      'SELECT id, name AS n FROM users as us left join user_detail on detail.user_id = us.id where us.id = 1',
    ];

    testCases.forEach(testCase => {
      it(`'${testCase}' not to throw error.`, () => {
        expect(() => parse(testCase)).not.toThrow();
      });
    });
  });
});
