var replace = require('../../index.js');

describe('handles empty inputs', function (expect) {
    expect(replace().one('foo')).toBe('foo');
});

describe('does string replacement via regex', function (expect) {
    expect(replace('foo', 'bar').one('-foo-foo-')).toBe('-bar-bar-');
});

describe('does regex replacement', function (expect) {
    expect(replace(/foo[0-9]/g, 'bar').one('-foo2-foo3-')).toBe('-bar-bar-');
});

describe('does direct replacement', function (expect) {
    expect(replace.direct('^foo', 'bar').one('-^foo-^foo-')).toBe('-bar-^foo-');
});
