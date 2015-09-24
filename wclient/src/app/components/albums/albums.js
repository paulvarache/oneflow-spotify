angular.module('OneflowSpotifyApp.albums', [])
    .directive('album', [function () {
        return {
            restrict: 'E',
            scope: {
                album: '=data'
            },
            templateUrl: 'templates/album.tpl.html',
            link: function (scope) {
                scope.$watch('album', function (newVal) {
                    scope.style = {
                        background: "url('" + newVal.images[1].url + "')",
                        width: newVal.images[1].width + 'px',
                        height: newVal.images[1].height + 'px'
                    };
                });
            }
        };
    }]);
