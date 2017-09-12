const preprocess = require('preprocess');

export function processFileAsync(sourceFile, destinationFile, context, callback) {
     preprocess.preprocessFile(sourceFile, destinationFile, context, callback);
}

export function testFunction() {
     return "Hello";
}
