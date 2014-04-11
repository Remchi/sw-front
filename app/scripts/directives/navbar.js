'use strict';

angular.module('swFrontApp').directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController'
  };
});

