/**
 * Created by chinna on 5/6/14.
 */

describe('some', function() {
    it('takes an array and a predicate, each value from array passes into predicate, it returns true if predicate returns true for any value else return false', function() {
        expect(some([1, 2, 3, 4], function(num) { return num % 2 == 0 })).toEqual(true);
    });
    it('takes an array and a predicate, each value from array passes into predicate, it returns true if predicate returns true for any value else return false', function() {
        expect(some([3, 5, 7, 9], function(num) { return num % 2 == 0 })).toEqual(false);
    });
    it('takes an array and a predicate, each value from array passes into predicate, it returns true if predicate returns true for any value else return false', function() {
        expect(some([12, 25, 34], function(num) { return num % 5 == 0 })).toEqual(true);
    });
    it('takes an array and a predicate, each value from array passes into predicate, it returns true if predicate returns true for any value else return false', function() {
        expect(some([14, 23, 29, 32], function(num) { return num % 5 == 0 })).toEqual(false);
    });
    it('if passed an empty array, returns false', function() {
        expect(some([], function(num) { return num % 2 == 0 })).toEqual(false);
    });
});