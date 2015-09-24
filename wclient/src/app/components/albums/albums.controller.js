angular.module('OneflowSpotifyApp.albums')
    .controller('AlbumsController', ['$scope', 'Api', function ($scope, Api) {
        Api.listAlbums().success(function (albums) {
            $scope.albums = albums;
        });
    }]);
