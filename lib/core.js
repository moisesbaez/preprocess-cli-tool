"use strict";

Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.processFileAsync = processFileAsync;
var preprocess = require('preprocess');

function processFileAsync(sourceFile, destinationFile) {
     var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : process.env;
     var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

     return new Promise(function (resolve, reject) {
          preprocess.preprocessFile(sourceFile, destinationFile, context, function (error) {
               if (error) {
                    reject(error);
               }
               resolve("Success");
          }, options);
     });
}