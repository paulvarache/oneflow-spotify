/**
 * Configure and start the server
 */
var express = require('express'),
    uuid    = require('uuid'),
    cors    = require('cors');
module.exports = function (opts) {
    var app = express();

    app.use(cors());

    /**
     * Middleware that add a child logger with an id and the config object
     * to the request, and log the request itself
     */
    app.use(function (req, res, next) {
        req.logger = opts.logger.child({reqId: uuid.v4()});
        req.config = opts.config;
        req.logger.info({req: req});
        next();
    });

    require('./routes/v1/albums')(app);

    app.listen(opts.config.server.port, function () {
        opts.logger.info("Server listenning on port " +
            opts.config.server.port);
    });
};
