/**
 * Created by sidhu on 9/6/14.
 */

describe('sortBy', function() {
    it('Returns a sorted copy of list, ranked in ascending order by the results of running each value through iterator',function() {
         expect(sortBy([1, 2, 4, 5],function(e) {
             return e * 2;
         })).toEqual([2, 4, 8, 10]);
    });
    it('if iterator is not passed, then return sorted array',function() {
        expect(sortBy([6, 2, 3, 5])).toEqual([2, 3, 5, 6]);
    });
    it('if iterator is a property of the list, then return sorted based on that property list',function() {
        expect(sortBy([{name: 'moe', age: 40}, {name: 'larry', age: 50}], 'name')).toEqual([{name: 'larry', age: 50}, {name: 'moe', age: 40}]);
    });
});
