/**
 * Created by chinna on 4/6/14.
 */

describe('find', function() {
    it('takes an array, and a function, passes each value from the array into the function,  returns the first one that passes a truth test in the function', function() {
        expect(find([3, 2, 4], function(n) { return n % 2 === 0; })).toEqual(2);
    });
    it('takes an array and returns first element in the array that passes a truth test in the function then breaks the loop', function() {
        expect(find([2, 3, 5, 4], function(n) { return n % 2 !== 0; })).toEqual(3);
    });
    it('if no element passes the truth test in the array it returns undefined', function() {
        expect(find([3, 5, 7], function(n) { return n % 2 === 0; })).toEqual(undefined);
    });
});