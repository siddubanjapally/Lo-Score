describe('unique', function() {
    it('it returns empty array nothing to pass to that function', function() {
        expect(uniq()).toEqual([]);
    });
    it('it returns sorted list of unique array when we pass an array',function() {
        expect(uniq([1,5,3,2,1,4])).toEqual([1,5,3,2,4]);
    });
    it('if we pass add iterate function then we have to unique that resulted array', function() {
        expect(uniq([1,3,4,1,5,4,3,6],function(value) {return value + 1;})).toEqual([2,4,5,6,7]);
    });
    it('if we pass function and function context then we have to unique that resulted array', function() {
        expect(uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math)).toEqual([1,2,3]);
    });
});