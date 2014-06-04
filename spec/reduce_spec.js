/**
 * Created by chinna on 4/6/14.
 */

describe('reduce', function() {
    it('takes an array, a function, and an initial value, passes each value from the array into the function, calculate all the values and returns a value', function() {
        expect(reduce([3, 2, 4], function(acc, e) { return acc + e; }, 0)).toEqual(9);
    });
    it('takes an array, a function, and an initial value, passes each value from the array into the function, calculate all the values and returns a value', function() {
        expect(reduce([3, 2, 4], function(acc, e) { return acc * e; }, 1)).toEqual(24);
    });
    it('if passed an empty array it returns the initial value which we passed', function() {
        expect(reduce([], function(acc, e) { return acc + e; }, 0)).toEqual(0);
    });
    it('if passed an empty array it returns the initial value which we passed', function() {
        expect(reduce([], function(acc, e) { return acc * e; }, 1)).toEqual(1);
    });
});
