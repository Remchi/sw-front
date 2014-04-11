'use strict';

angular.module('swFrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])

  .factory('authInterceptor', function($location, $q) {
    return {
      request: function(config) {
        config.headers = config.headers || {};
        if (localStorage.auth_token) {
          config.headers.token = localStorage.auth_token;
        }
        return config;
      },
      responseError: function(response) {
        if (response.status === 401) {
          $location.path('/login');
        }
        return $q.reject(response);
      }
    };
  })

  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/edges', {
        templateUrl: 'views/edges.html',
        controller: 'EdgesController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/logout', {
        controller: 'LogoutController',
        templateUrl: 'views/logout.html'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


