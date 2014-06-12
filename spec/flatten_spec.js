/**
 * Created by sidhu on 6/6/14.
 */
describe('flatten', function() {
    it('convert multi-level array to single array', function() {
        expect(flatten([1,2,[3,4,[5,6]]])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
