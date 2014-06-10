describe('partition', function() {
    it('it returns an array of two arrays which satisfies the passing isEven predicate function', function() {
        expect(partition([1,2,3,4,5,6], function(value) {return value % 2 === 0;})).toEqual([[2,4,6],[1,3,5]]);
    });
    it('it returns an array of two arrays which satisfies the passing isOdd predicate function', function() {
        expect(partition([1,2,3,4,5,6], function(value) {return value % 2 !== 0;})).toEqual([[1,3,5],[2,4,6]]);
    });
    it('it returns an array of two arrays which satisfies the passing isMultiplied predicate function', function() {
        expect(partition([1,2,3,4,5,6], function(value) { return 10 % value === 0;})).toEqual([[1,2,5],[3,4,6]]);
    });
});