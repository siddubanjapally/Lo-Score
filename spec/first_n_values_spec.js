/**
 * Created by sidhu on 5/6/14.
 */
describe('first', function() {
    it('it takes an array and a value return n values from array', function() {
        expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });
    it ('if n value is zero then return first index value of the array',function() {
        expect(first([1, 2, 3, 4, 5])).toEqual(1);
    });
});
