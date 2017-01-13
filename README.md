# bundl-replace

*Replace strings within your bundles*

*Runs with the amazing [Bundl](https://github.com/seebigs/bundl) build tool*

## Install

```
$ npm install --save-dev bundl-replace
```

## Use

```js
var bundl = require('bundl');
var write = require('bundl-write');
var replace = require('bundl-replace');

bundl(targets)
    .then(replace(pattern, replacement))
    .then(write())
    .all();
```

## Arguments

Behave like [String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) with the exception that String patterns are replaced globally
