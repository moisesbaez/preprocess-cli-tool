const argv = require('yargs');
const preprocess = require('preprocess');

argv.usage('Usage: $0 <command> <options>')
     .help('h')
     .alias('h', 'help')
     .option('f', {
          alias: 'src-file',
          describe: 'The source file to be processed',
          type: 'string',
          requiresArg: true
     })
     .option('o', {
          alias: 'out-file',
          describe: 'The file to be output after processing',
          type: 'string',
          requiresArgs: true
     })
     .version('v', 'Current version of tool', '0.0.1')
     .alias('v', 'version')
     .argv;
