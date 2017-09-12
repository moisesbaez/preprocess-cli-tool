"use strict";

Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.processFileAsync = processFileAsync;
exports.testFunction = testFunction;
var preprocess = require('preprocess');

function processFileAsync(sourceFile, destinationFile, context, callback) {
     preprocess.preprocessFile(sourceFile, destinationFile, context, callback);
}

function testFunction() {
     return "Hello";
}