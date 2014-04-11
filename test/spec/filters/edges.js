'use strict';

describe('EdgesFilter', function() {
  var filter, edges, filterBy;

  beforeEach(module('swFrontApp'));

  beforeEach(inject(function(edgesFilter) {
    filter = edgesFilter;
    edges = [
      {
        requirements: [
          { mode: 'rank', name: null, value: 'Seasoned' }
        ],
        category: { name: 'first' }
      },
      {
        requirements: [
          { mode: 'rank', name: null, value: 'Novice' }
        ],
        category: { name: 'second' }
      }
    ];
    filterBy = {
      rank: { name: 'Novice' },
      category: { name: 'first' }
    };
  }));

  describe('Category filter', function() {

    it('filters by category name', function() {
      filterBy.rank.name = 'All';
      expect(filter(edges, filterBy).length).toEqual(1);
    });

    it('returns all elements when category filter is All', function() {
      filterBy.category.name = 'All';
      filterBy.rank.name = 'All';

      expect(filter(edges, filterBy).length).toEqual(2);
    });
  });

  describe('Rank filter', function() {
    it('filters by rank', function() {
      filterBy.category.name = 'All';
      expect(filter(edges, filterBy).length).toEqual(1);
    });
  });
});
