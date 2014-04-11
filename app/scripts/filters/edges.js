'use strict';

angular.module('swFrontApp').filter('edges', function() {

  var getRank = function(reqs) {
    var req = {};
    for (var i = 0; i < reqs.length; i++) {
      if (reqs[i].mode === 'rank') {
        req = reqs[i];
        break;
      }
    }
    return req.value;
  };

  
  return function(edges, filterBy) {
    return edges.filter(function(element, index, array) {
      var category = (element.category.name === filterBy.category.name || filterBy.category.name === 'All');
      var rank = (getRank(element.requirements) === filterBy.rank.name || filterBy.rank.name === 'All');
      return category && rank;
    });
  };

});
