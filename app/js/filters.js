'use strict';

/* Filters */

var videoPodcastFilters = angular.module('videoPodcastFilters', []);

videoPodcastFilters.filter('trustResource', ['$sce', function ($sce) {
    return function (url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);