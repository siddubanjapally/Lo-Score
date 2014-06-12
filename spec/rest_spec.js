/**
 * Created by sidhu on 6/6/14.
 */
describe('rest', function() {
    it('it takes an array and index then return an array start with index value', function() {
        expect(rest([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
    });
    it ('if index is zero then return same array except first element in that array',function() {
        expect(rest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    });
});
