(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _m = require('./m3');

var _m2 = _interopRequireDefault(_m);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_m2.default); // import { a as aaa, b, fn } from './m1'
// console.log(aaa, b, fn)

// import * as m1 from './m1'
// console.log(m1)


// import { a, b, fn } from './m2'
// console.log(a, b, fn)
// import * as m2 from './m2'
// console.log(m2)

// import m3 from './m3'
// console.log(m3)
},{"./m3":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    console.log('aaa');
};
},{}]},{},[1]);
