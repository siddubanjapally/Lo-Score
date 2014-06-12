describe('map', function() {
    it('takes an array, and a function, passes each value from the array into the function, collects all the values and returns it as an array', function() {
        expect(map([1, 2, 3, 4], function(e) { return e * e; })).toEqual([1, 4, 9, 16]);
    });
    it('if passed an empty array, returns an empty array', function() {
        expect(map([], function() { })).toEqual([]);
    });
//    it('if passed undefined , returns an empty array', function() {
//        expect(map(undefined, function() { })).toEqual([]);
//    });
});
