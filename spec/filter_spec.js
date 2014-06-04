/**
 * Created by chinna on 4/6/14.
 */

describe('filter', function() {
    it('takes an array, and passes each value from the array to the function and returning an array of which are passes the condition in the function', function() {
       expect(filter([1, 2, 3, 4], function(n) { return n % 2 == 0; })).toEqual([2, 4]);
    });
    it('if no element passes the condition in function then it will return empty array', function() {
        expect(filter([1, 5, 3, 7], function(n) { return n % 2 == 0; })).toEqual([]);
    });
    it('takes an array and it returning odd elements array from the given array', function() {
        expect(filter([1, 2, 5, 4, 3, 7], function(n) { return n % 2 !== 0; })).toEqual([1, 5, 3, 7]);
    });
});