'use strict';

/* Services */

var videoPodcastServices = angular.module('videoPodcastServices', ['ngResource']);

videoPodcastServices.service('feedService', ['$http', function ($http) {

    this.parseFeed = function (url) {
        return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q='
            + encodeURIComponent(url));
    };
}]);

videoPodcastServices.factory('focus', ['$timeout', '$window', function ($timeout, $window) {
    return function (id) {
        // timeout makes sure that is invoked after any other event has been triggered.
        $timeout(function () {
            var element = $window.document.getElementById(id);
            if (element)
                element.focus();
        });
    };
}]);