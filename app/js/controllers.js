'use strict';

/* Controllers */

var videoPodcastControllers = angular.module('videoPodcastControllers', []);

videoPodcastControllers.controller('VideoPodcastCtrl', ['$scope', 'feedService', 'focus', '$window',
    function ($scope, feedService, focus, $window) {
        $scope.feedSources = [
            {text: 'Load Custom RSS file', url: ''},
            {text: 'Anderson Cooper 360°', url: 'http://rss.cnn.com/services/podcasting/ac360/rss.xml'},
            {text: 'Student News', url: 'http://rss.cnn.com/services/podcasting/studentnews/rss.xml'},
            {text: 'Fareed Zakaria', url: 'http://edition.cnn.com/services/podcasting/fareedzakaria/rss.xml'},
            {text: 'State of the Union', url: 'http://edition.cnn.com/services/podcasting/stateoftheunion/rss.xml'}
        ];
        $scope.feedSource = $scope.feedSources[4];

        $scope.loadFeed = function (source) {
            $scope.feedSource = source;
            var invalidRssPathMessage = 'Please, fill a valid RSS XML URL';
            if (source.url) {
                feedService.parseFeed(source.url).then(function (result) {
                    $scope.feed = result.data.responseData.feed;
                    $scope.currentPodcast = $scope.feed.entries[0];
                }).catch(function () {
                    $window.alert(invalidRssPathMessage);
                });
            } else {
                $window.alert(invalidRssPathMessage);
                focus('podcastRssUrlInput');
            }
            $scope.selectedIndex = 0;
        };

        $scope.loadFeed($scope.feedSource);

    }]);

