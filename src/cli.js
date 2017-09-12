const core = require('./core.js');

const argv = require('yargs')
     .usage('Usage: $0 <option> <args>')
     .help('h')
     .alias('h', 'help')
     .option('f', {
          alias: 'srcFile',
          describe: 'The source file to be processed',
          type: 'string',
          requiresArg: true
     })
     .option('o', {
          alias: 'destFile',
          describe: 'The file to be output after processing',
          type: 'string',
          requiresArgs: true
     })
     .version('v', 'Current version of tool', '0.0.1')
     .alias('v', 'version')
     .argv;

if(argv.srcFile && argv.destFile) {
     core.processFileAsync(argv.srcFile, argv.destFile, argv.context = process.env);
}
else {
     console.log("Source file or destination file was not specified");
}
