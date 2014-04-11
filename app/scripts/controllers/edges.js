'use strict';

angular.module('swFrontApp').controller('EdgesController', function ($scope, Edges, auth, filterBy) {
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.filterBy = filterBy;

  $scope.edges = Edges.query();

  $scope.edgeDelete = function(edge) {
    edge.$delete();
  };

  $scope.newEdge = new Edges;
  $scope.editEdge = function(edge) {
    $scope.newEdge = edge;
    console.log($scope.newEdge);
  };

  var selectedEdge = null;

  $scope.isSelected = function(edge) {
    return edge === selectedEdge;
  };

  $scope.selectEdge = function(edge) {
    selectedEdge = (selectedEdge === edge) ? null : edge;
  };

  $scope.displayRequirements = function(reqs) {
    var result = '';
    for (var i=0; i < reqs.length; i++) {
      if (result !== '') { result += ', '; }
      if (reqs[i].name) { result += reqs[i].name + ' '; }
      result += reqs[i].value;
    }
    return result;
  };
});
