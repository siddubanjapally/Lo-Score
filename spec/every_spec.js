/**
 * Created by chinna on 5/6/14.
 */

describe('every', function() {
    it('takes an array and a predicate, each element from array passes into predicate, it returns true if predicate returns true for all elements else return false', function() {
        expect(every([1, 2, 3, 4], function(num) { return num % 2 ==0 })).toEqual(false);
    });
    it('takes an array and a predicate, each element from array passes into predicate, it returns true if predicate returns true for all elements else return false', function() {
        expect(every([2, 4, 6, 8], function(num) { return num % 2 ==0 })).toEqual(true);
    });
    it('takes an array and a predicate, each element from array passes into predicate, it returns true if predicate returns true for all elements else return false', function() {
        expect(every([1, 2, 3, 4], function(num) { return num % 2 !==0 })).toEqual(false);
    });
    it('takes an array and a predicate, each element from array passes into predicate, it returns true if predicate returns true for all elements else return false', function() {
        expect(every([1, 3, 5, 7], function(num) { return num % 2 !==0 })).toEqual(true);
    });
    it('takes an array and a predicate, each element from array passes into predicate, it returns true if predicate returns true for all elements else return false', function() {
        expect(every([12, 25, 34], function(num) { return num % 5 ==0 })).toEqual(false);
    });
    it('takes an array and a predicate, each element from array passes into predicate, it returns true if predicate returns true for all elements else return false', function() {
        expect(every([15, 20, 25, 30], function(num) { return num % 5 ==0 })).toEqual(true);
    });
    it('if passed an empty array, returns true', function() {
        expect(every([], function(num) { return num % 2 ==0 })).toEqual(true);
    });
});
