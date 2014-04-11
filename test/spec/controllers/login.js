'use strict';

describe('LoginController', function() {
  var controller, scope, http;
  
  beforeEach(module('swFrontApp'));

  beforeEach(inject(function($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    http = $httpBackend;
    http.whenPOST('/api/login').respond({});

    controller = $controller('LoginController', { $scope: scope });
  }));

});
