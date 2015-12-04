'use strict';

var baz = 4;

var qux = (function (module) {
var exports = module.exports;
module.exports.qux = 5
module.exports.extra = 6
return module.exports;
})({exports:{}});

var qux = qux.qux;

exports.baz = baz;
exports.qux = qux;