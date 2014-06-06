/**
 * Created by chinna on 6/6/14.
 */

describe('shuffle', function() {
    it('of n returns an array of length n', function() {
        expect(shuffle([1, 2, 3, 4, 5]).length).toEqual(5);
    });
//    it('with `arr` returns an array containing all values from `arr`', function() {
//        var arr = shuffle([1, 2, 3, 4, 5]);
//        expect(arr[0]).toBeIn([1, 2, 3, 4, 5]
//    });
});