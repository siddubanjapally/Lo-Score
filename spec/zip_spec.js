describe('maximumArray', function() {
    it('if we send array list then we have to return maximum array', function() {
        expect(maximumArray( [[1,2], [3,4,5], [0]] )).toEqual([3,4,5]);
    });
    it('if we send array list then we have to return maximum array', function() {
        expect(maximumArray( [[1,2,3], [4,5], [0]] )).toEqual([1,2,3]);
    });
});
describe('get an array from array list based on given index', function() {
    it('if we pass empty array list it will return empty array', function() {
       expect(getArray( [] )).toEqual([]);
    });
    it('it gets elements from the array list based on passing index and then return that elements as an array', function() {
        expect(getArray([[1,2], [3,4], [4,5,6]], 1)).toEqual([2,4,5]);
        expect(getArray([[1,2], [3,4], [4,5,6]], 2)).toEqual([undefined,undefined,6]);
    });
});
describe('zip', function() {
    it('if we not passing any arguments it will give an empty array', function() {
        expect(zip()).toEqual([]);
    });
    it('if we pass one array then it will return an empty array', function() {
        expect(zip([1,2,4])).toEqual([]);
    });
    it('if we pass two array type arguments then it will give zipped array based on maximum arguments array length', function() {
        expect(zip( [1,2,3], [4,5] )).toEqual([[1,4],[2,5],[3,undefined]]);
    });
    it('if we pass three array type arguments then it will give zipped array based on maximum arguments array length', function() {
        expect(zip( [1,2,3], [4,5], [6,7,8,9] )).toEqual([[1,4,6],[2,5,7],[3,undefined,8],[undefined,undefined,9]]);
    });
});