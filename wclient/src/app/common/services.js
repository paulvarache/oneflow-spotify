angular.module('OneflowSpotifyApp')
    .service('Api', ['$http', 'APIUrls', function ($http, APIUrls) {
        return {
            listAlbums: function () {
                return $http.get(APIUrls.getUrl('albums'));
            }
        };
    }]);
