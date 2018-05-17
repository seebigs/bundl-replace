var replace = require('../../index.js');

function mockContents(c) {
    var _c = c;
    return {
        getHash: function () {
            return void 0;
        },
        getString: function () {
            return _c;
        },
        set: function (newC) {
            _c = newC;
        },
    };
}

describe('handles empty inputs', function (expect) {
    var r = { contents: mockContents('foo') };
    replace().exec(r);
    expect(r.contents.getString()).toBe('foo');
});

describe('does string replacement via regex', function (expect) {
    var r = { contents: mockContents('-foo-foo-') };
    replace('foo', 'bar').exec(r);
    expect(r.contents.getString()).toBe('-bar-bar-');
});

describe('does regex replacement', function (expect) {
    var r = { contents: mockContents('-foo2-foo3-') };
    replace(/foo[0-9]/g, 'bar').exec(r);
    expect(r.contents.getString()).toBe('-bar-bar-');
});

describe('does direct replacement', function (expect) {
    var r = { contents: mockContents('-^foo-^foo-') };
    replace.direct('^foo', 'bar').exec(r);
    expect(r.contents.getString()).toBe('-bar-^foo-');
});

describe('handles function as replacement', function (expect) {
    var r = { name: 'N', contents: mockContents('-foo-foo-') };
    replace('foo', function (r, match) {
        return r.name + match;
    }).exec(r);
    expect(r.contents.getString()).toBe('-Nfoo-Nfoo-');
});
