var AlbumsController = {};

// Contains the spotify ID for the band IRON MAIDEN
AlbumsController.IRON_MAIDEN = '6mdiAmATAx73kdxrNrnlao';

var Spotify = require('../service/Spotify');

AlbumsController.list = function (req, res, next) {
    var spotify = new Spotify(req.config.spotify, { logger: req.logger });
    // List all the albums and send them in the response
    spotify.getAlbums(AlbumsController.IRON_MAIDEN).then(function (albums) {
        return res.send(albums);
    }, next);
};

module.exports = AlbumsController;
