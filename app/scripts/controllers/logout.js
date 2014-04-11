'use strict';

angular.module('swFrontApp').controller('LogoutController', function(auth, $location) {
  auth.logout();
});
