require('dotenv').config();
const core = require('./core');
const chalk = require('chalk');

const argv = require('yargs')
     .usage('Usage: $0 <options> <args>')
     .help('h')
     .alias('h', 'help')
     .option('f', {
          alias: 'srcFile',
          describe: 'The source file to be processed',
          type: 'string',
          requiresArg: true
     })
     .option('d', {
          alias: 'destFile',
          describe: 'The file to be output after processing',
          type: 'string',
          requiresArgs: true
     })
     .option('c', {
          alias: 'context',
          describe: 'Context JSON object that includes variables found in the source',
          type: 'string',
          requiresArgs: true
     })
     .option('t', {
          alias: 'type',
          describe: 'Type of file to process',
          type: 'string',
          requiresArgs: true,
          default: 'html'
     })
     .version()
     .alias('v', 'version')
     .demandOption(['f', 'd'], chalk.red('Please provide both srcFile (-f) and destFile (-d) arguments to run this tool'))
     .argv;


let context = undefined;
let options = {};

if(argv.context) {
     context = JSON.parse(argv.context);
}

options.type = argv.type;

core.processFileAsync(argv.srcFile, argv.destFile, context, options)
     .then((result) => {
          console.log(chalk.green(`Successfully wrote "${argv.srcFile}" to "${argv.destFile}"`));
     })
     .catch((error) => {
          console.log(chalk.red(error));
     });
