var request = require('request-promise');

/**
 * Small Spotify SDK to request data from the Spotify Web API
 */
function Spotify(spotifyOpts, opts) {
    // hold the baseUrl of the Spotify API
    this.baseUrl = spotifyOpts.baseUrl;
    // Get the logger from the options or require the default one
    this.logger = opts.logger || require('../logger');
}

/**
 * Get all the album from a band ID and filter them to remove duplicate ones
 */
Spotify.prototype.getAlbums = function(artistId) {
    // Construct the URI
    var uri = [this.baseUrl, 'artists', artistId, 'albums'].join('/');
    var requestOpts = {
        uri: uri,
        method: 'GET',
        json: true
    };
    this.logger.debug('Ask spotify for the album of the artist n°' + artistId);
    // Send the request
    return request(requestOpts).then(function (result) {
        this.logger.debug('Found ' + result.items.length + ' results from spotify');
        // Get an array filtered by lower case names
        return Spotify.filterList(result.items, 'name');
    }.bind(this));
};

/**
 * Return a list of unique objects filtered on a key of these objects
 */
Spotify.filterList = function (list, key, opts) {
    opts = opts || {
        lowerCase: true
    };
    // Crate a custom key that will hold the value of the key or lower case
    // version of it
    var _key;
    // Store the items in an object using the custom key as keys
    var filteredObject = list.reduce(function (acc, item) {
        _key = item[key];
        if (opts.lowerCase) {
            _key = _key.toLowerCase();
        }
        if (!acc[_key]) {
            acc[_key] = item;
        }
        return acc;
    }, {});
    // Extract all the items of the object into an Array
    return Object.keys(filteredObject).map(function (key) {
        return filteredObject[key];
    });
};

module.exports = Spotify;
