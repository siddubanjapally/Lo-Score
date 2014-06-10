/**
 * Created by jayakrishna on 9/6/14.
 */
describe('intersection', function() {
    it('if passed undefined, return an empty array', function() {
        expect(intersection()).toEqual([]);
    });
    it('if passed an empty array, returns an empty array', function() {
        expect(intersection([])).toEqual([]);
    });
    it('if passed an array, returns the same array', function() {
        expect(intersection([1, 2, 3])).toEqual([1, 2, 3]);
    });
    it('if passed more than one argument as an array, returns each value present in each of the arrays', function() {
        expect(intersection([1, 2, 3], [2, 3, 4], [4, 5, 2, 3])).toEqual([2, 3]);
    });
    it('if passed more than one argument as an array, returns each value present in each of the arrays', function() {
        expect(intersection([1, 2, 3], [5, 3, 4], [8])).toEqual([]);
    });
});
