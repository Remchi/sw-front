'use strict';

angular.module('swFrontApp').controller('AdminController', function($http) {
  $http.get('/api/users');
});
