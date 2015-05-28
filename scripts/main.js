(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var $ = require('jQuery');
"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _utilsLogger = require("./utils/logger");

var logger = _interopRequireWildcard(_utilsLogger);

logger.log("normal message logging");

logger.error("error logging");

},{"./utils/logger":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;
exports.error = error;

function formatErrorMessage(message) {
    return "ERROR: " + message;
}

function log(message) {
    if (typeof console !== "undefined" || typeof console.log !== "undefined") {
        console.log(message);
    }
}

function error(message) {
    var errorMessage = formatErrorMessage(message);
    log(errorMessage);
}

},{}]},{},[1]);
