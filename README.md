# bundl-replace

*Replace strings within your bundles*

*Runs with the amazing [Bundl](https://github.com/seebigs/bundl) build tool*

## Install

```
$ npm install --save-dev bundl-replace
```

## Use

```js
var Bundl = require('bundl');
var write = require('bundl-write');
var replace = require('bundl-replace');

new Bundl(targets)
    .then(replace(pattern, replacement))
    .then(write())
    .go();
```

## Arguments

Behave like [String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) with the exception that String patterns are replaced globally

## Direct Replace

Sometimes it is desirable to do a direct string replace without converting to a RegEx. Note: this only replaces the first occurrence.

```js
var Bundl = require('bundl');
var write = require('bundl-write');
var replace = require('bundl-replace');

new Bundl(targets)
    .then(replace.direct('(function(foo){', '(function(bar){'))
    .then(write())
    .go();
```
