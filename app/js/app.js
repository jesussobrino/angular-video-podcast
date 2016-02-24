'use strict';

/* App Module */

var videoPodcastApp = angular.module('videoPodcastApp', [
    'ngRoute',
    'videoPodcastControllers',
    'videoPodcastServices',
    'videoPodcastFilters',
    'angularVideoPodcastDirectives'
]);

videoPodcastApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'template/podcast.html',
            controller: 'VideoPodcastCtrl'
        }).when('/details/:podcastId', {
            //TODO Podcast Detail navigation for future version
            //templateUrl: 'template/podcast-detail.html'
        }).otherwise({
            redirectTo: '/main'
        });
    }]);
