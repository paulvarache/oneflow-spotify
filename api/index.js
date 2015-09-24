/**
 * Parse the command line parameters and put them in an options object.
 */
var path = require('path'),
    logger = require('./lib/logger'),
    argv = require('yargs')
    .usage('Usage: index.js --config [configFile] --log_level [TRACE|DEBUG|INFO|WARN|ERROR]')
    .example('index.js --config ./conf/dev.js --log_level INFO',
             'Start the server with the dev config file and output the logs above INFO')
    .alias('c', 'config')
    .describe('c', 'Path to the config file')
    .demand('config')
    .alias('c', 'config')

    .help('h')
    .alias('h', 'help')
    .argv;

var opts = {};

/**
 * Try to load the configuration file
 */
try {
    if (argv.config.charAt(0) === '/') {
        opts.config = require(argv.config);
    } else {
        opts.config = require(path.join(process.cwd(), argv.config));
    }
} catch(e) {
    logger.error('Could not load the configuration file:', e);
    process.exit(1);
}


/**
 * Load the opts object with useful information and call the server module
 */
opts.logLevel = argv.log_level;
opts.logger = logger;

require('./server')(opts);
