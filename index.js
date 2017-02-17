/**
 * Replace extension for Bundl
 */

function replace (pattern, replacement, direct) {
    var regex = null;

    if (pattern) {
        regex = pattern instanceof RegExp ? pattern : (direct ? pattern : new RegExp(pattern, 'g'));
    }

    function one (contents, r) {
        return regex ? contents.replace(regex, replacement) : contents;
    }

    return {
        one: one
    };
}

replace.direct = function (pattern, replacement) {
    return replace(pattern, replacement, true);
}

module.exports = replace;
