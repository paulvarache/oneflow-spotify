angular.module('OneflowSpotifyApp', ['pvarache.APIUrls', 'OneflowSpotifyApp.albums'])
    .config(['APIUrlsProvider', function (APIUrlsProvider) {
        APIUrlsProvider.hostname = window.apiConfig.hostname;
        APIUrlsProvider.suffix = window.apiConfig.suffix;
        APIUrlsProvider.secure = window.apiConfig.secure;
        APIUrlsProvider.port = window.apiConfig.port;

        APIUrlsProvider.urls = {
            albums: '/albums'
        };
    }]);
