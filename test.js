const assert = require('chai').assert;

const crazycase = require('./');

describe('crazycase', () => {
  it('alternates string casing', () => {
    assert.equal(crazycase('abcdefg'), 'aBcDeFg');
    assert.equal(crazycase('ABCDEFG'), 'aBcDeFg');
    assert.equal(crazycase('a cde g'), 'a cDe g');
    assert.equal(crazycase('  abc  '), '  aBc  ');
  });

  it('handles edge cases', () => {
    assert.equal(crazycase(''), '');
    assert.equal(crazycase(' '), ' ');
  });

  it('throws with non-string input', () => {
    assert.throws(() => crazycase(null));
    assert.throws(() => crazycase({}));
    assert.throws(() => crazycase([]));
    assert.throws(() => crazycase(undefined));
    assert.throws(() => crazycase(123));
    assert.throws(() => crazycase(0));
    assert.throws(() => crazycase(true));
    assert.throws(() => crazycase(false));
    assert.throws(() => crazycase(false));
  });

  it('throws with missing input', () => {
    assert.throws(() => crazycase());
  });
});
