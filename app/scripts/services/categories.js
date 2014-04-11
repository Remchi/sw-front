'use strict';

angular.module('swFrontApp').factory('Categories', function($resource) {
  //this.fetch = function() {
  //  return $http.get('/api/categories');
  //};
  return $resource('/api/categories');
});
