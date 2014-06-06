/**
 * Created by chinna on 6/6/14.
 */

describe('pluck', function() {
    it('takes an array of objects and a property name, it extracts all values of the property from array of objects, returns it as an array', function() {
        expect(pluck([{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}, {id: 4, name: 'd'}], 'id')).toEqual([1, 2, 3, 4]);
    });
    it('takes an array of objects and a property name, it extracts all values of the property from array of objects, returns it as an array', function() {
        expect(pluck([{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}, {id: 4, name: 'd'}], 'name')).toEqual(['a', 'b', 'c', 'd']);
    });
    it('if property name is empty or not in the array of objects it returns an array with undefined as elements', function() {
        expect(pluck([{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}, {id: 4, name: 'd'}], '')).toEqual([undefined, undefined, undefined, undefined]);
    });
    it('if passed only array of objects without property name it returns an array with undefined as elements', function() {
        expect(pluck([{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}, {id: 4, name: 'd'}])).toEqual([undefined, undefined, undefined, undefined]);
    });
});
