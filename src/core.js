const preprocess = require('preprocess');

export function processFileAsync(sourceFile, destinationFile, context = process.env, options = {}) {
     return new Promise((resolve, reject) => {
          preprocess.preprocessFile(sourceFile, destinationFile, context, function(error) {
               if (error) {
                    reject(error);
               }
               resolve("Success");
          }, options);
     });
}
