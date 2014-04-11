'use strict';

angular.module('swFrontApp').controller('FiltersController', function($scope, Ranks, Categories, filterBy) {
  $scope.ranks = Ranks.query();
  filterBy.rank = $scope.ranks[0];
  
  $scope.categories = Categories.query(function() {
    $scope.categories.unshift({name: 'All'});
    filterBy.category = $scope.categories[0];
  });
});
