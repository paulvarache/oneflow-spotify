var bunyan = require('bunyan'),
    logger = bunyan.createLogger({
        name: 'oneflow-spotify-API',
        serializers: {
            req: bunyan.stdSerializers.req
        }
    });

module.exports = logger;
