/**
 * Created by jayakrishna on 9/6/14.
 */

describe('union', function() {
    it('if passed undefined, returns empty array', function() {
        expect(union()).toEqual([]);
    });
    it('if passed empty array, returns an empty array', function() {
        expect(union([])).toEqual([]);
    });
    it('if passed an array, returns the same array', function() {
        expect(union([1, 3, 4])).toEqual([1, 3, 4]);
    });
    it('if passed more than one array, returns the list of unique items', function() {
        expect(union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
    it('if passed more than one array, returns the list of unique items', function() {
        expect(union([1, 2, 3, 4, 5, 6], [2, 3, 4,5, 7], ['union', 'join'])).toEqual([1, 2, 3, 4, 5, 6, 7, 'union', 'join']);
    });
});
