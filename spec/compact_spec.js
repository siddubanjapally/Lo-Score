/**
 * Created by sidhu on 6/6/14.
 */
describe('compact', function() {
    it('trim out all falsy values from the array', function() {
        expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    });
});
