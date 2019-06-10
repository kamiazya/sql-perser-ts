import { parse } from '../../src/grammar/sql';

describe('SELECT statement', () => {
  const sqls = [
    'SELECT * FROM users',
    'SELECT * FROM users1',
    'SELECT name AS a FROM users'
  ];

  for (const sql of sqls) {
    it('not to to throw error.', () => {
      expect(() => {
        parse(sql);
      }).not.toThrow();
    });
  }
});
