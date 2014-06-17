/**
 * Created by sidhu on 17/6/14.
 */
describe('range', function() {
    it('take two parameters and gives an array between those values', function() {
        expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    });

    it('If the object is empty then return 0', function () {
        expect(range(0)).toEqual([]);
    });
});