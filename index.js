/**
 * Replace plugin for Bundl
 *   replace strings within your bundles
 */

function replaceInit(pattern, replacement, _direct) {
    var regex = null;

    if (pattern) {
        regex = pattern instanceof RegExp ? pattern : (_direct ? pattern : new RegExp(pattern, 'g'));
    }

    function replace(r) {
        if (regex && r.contents) {
            var contentsString = r.contents.getString();
            if (contentsString) {
                if (typeof replacement === 'function') {
                    r.contents.set(contentsString.replace(regex, function (match) {
                        return replacement(r, match);
                    }));
                } else {
                    r.contents.set(contentsString.replace(regex, replacement));
                }
            }
        }
        return r;
    }

    return {
        name: 'replace',
        stage: 'stringy',
        exec: replace,
    };
}

replaceInit.direct = function (pattern, replacement) {
    return replaceInit(pattern, replacement, true);
}

module.exports = replaceInit;
