/**
 * Created by chinna on 4/6/14.
 */

describe('find', function() {
    it('takes an array, and a function, passes each value from the array into the function,  returning the first one that passes a truth test ', function() {
        expect(find([3, 2, 4], function(n) { return n % 2 == 0; })).toEqual(2);
    });
    it('takes an array, a function, and an initial value, passes each value from the array into the function, calculate all the values and returns a value', function() {
        expect(find([3, 5, 4], function(n) { return n % 2 == 0; })).toEqual(4);
    });
    it('takes an array, a function, and an initial value, passes each value from the array into the function, calculate all the values and returns a value', function() {
        expect(find([3, 5, 7], function(n) { return n % 2 == 0; })).toEqual(undefined);
    });
});