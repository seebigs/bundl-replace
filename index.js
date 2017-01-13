/**
 * Replace extension for Bundl
 */

module.exports = function (pattern, replacement) {
    var regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, 'g');

    function one (contents, r) {
        return contents.replace(regex, replacement);
    }

    return {
        one: one
    };

};
