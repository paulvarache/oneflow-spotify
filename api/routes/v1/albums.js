var AlbumsController = require('../../lib/controller/Albums');

module.exports = function (app) {
    // Declare the list route
    app.get('/v1/albums', AlbumsController.list);
};
