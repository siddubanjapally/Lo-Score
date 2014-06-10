/**
 * Created by jayakrishna on 9/6/14.
 */
describe('difference', function() {
    it('if passed an array, returns the same array', function() {
        expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
    });
    it('if passed more than one argument, returns the values from first array that are not present in the other arrays', function() {
        expect(difference([1, 2, 3, 4], [3, 4, 5])).toEqual([1, 2]);
    });
    it('if passed more than one argument, returns the values from first array that are not present in the other arrays', function() {
        expect(difference([1, 2, 3, 4], [3, 4, 5], [2, 3, 4])).toEqual([1]);
    });
});
