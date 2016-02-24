'use strict';

/* Directives */

var angularVideoPodcastDirectives = angular.module('angularVideoPodcastDirectives', []);

angularVideoPodcastDirectives.constant('directivesConstants', {
    'KEY_CODES': {
        ENTER: 13,
        DOWN: 40,
        UP: 38,
        RIGHT: 39,
        LEFT: 37
    }
});

angularVideoPodcastDirectives.directive('autoFocusOn', function () {
    return {
        restrict: 'A',
        scope: {
            autoFocusOn: '='
        },
        link: function (scope, element) {
            if (scope.autoFocusOn) {
                element[0].focus();
            }
        }
    };
});

angularVideoPodcastDirectives.directive('rssFeedSelector', ['focus', 'directivesConstants', function (focus, directivesConstants) {
    return {
        restrict: 'E',
        templateUrl: 'template/rss-feed-selector.html',
        controller: 'VideoPodcastCtrl'
    };
}]);

angularVideoPodcastDirectives.directive('podcastPlaylist', ['focus', 'directivesConstants', function (focus, directivesConstants) {
    return {
        restrict: 'E',
        templateUrl: 'template/podcast-playlist.html',
        link: function (scope, element) {
            scope.selectPodcastHandler = function (podcast, index) {
                scope.currentPodcast = podcast;
                scope.selectedIndex = index;
            };
            element.bind('keyup', function (event) {
                var elementFocus = $('.play-list__podcast:focus');

                switch (event.keyCode) {
                    case directivesConstants.KEY_CODES.DOWN:
                        elementFocus.closest('li').next().find('a.play-list__podcast').focus();
                        break;
                    case directivesConstants.KEY_CODES.UP:
                        elementFocus.closest('li').prev().find('a.play-list__podcast').focus();
                        break;
                    case directivesConstants.KEY_CODES.RIGHT:
                        focus('videoPlayer');
                        break;
                }
            });
        }
    };
}]);

angularVideoPodcastDirectives.directive('podcastVideoPlayer', ['focus', 'directivesConstants', function (focus, directivesConstants) {
    return {
        restrict: 'E',
        scope: {
            currentPodcast: '='
        },
        templateUrl: 'template/podcast-video-player.html',
        link: function (scope, element) {
            scope.videoClickHandler = function (event) {
                var id = event.currentTarget.id;
                focus(id);
            };
            element.bind('keyup', function (event) {
                switch (event.keyCode) {
                    case directivesConstants.KEY_CODES.ENTER:
                        var videoElement = (angular.element(event.target))[0];
                        videoElement.paused ? videoElement.play() : videoElement.pause();
                        break;
                    case directivesConstants.KEY_CODES.LEFT:
                        var firstElementPlaylist = $('.play-list li a').first();
                        firstElementPlaylist.focus();
                        break;
                }
            });
        }
    };
}]);