'use strict';

angular.module('swFrontApp').service('Ranks', function() {
  this.query = function() {
    return [
      {
        name: 'All'
      },
      {
        name: 'Novice'
      },
      {
        name: 'Seasoned'
      }
    ];
  };
});
