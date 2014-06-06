/**
 * Created by jayakrishna on 6/6/14.
 */
describe('clone', function() {
    it('if passed undefined, returns an empty object', function() {
        expect(clone()).toEqual({});
    });
    it('if passed an object, returns the shallow copy of same object', function() {
        expect(clone({id:1, lang:'javaScript'})).toEqual({id:1, lang:'javaScript'});
    });
    it('if passed more than one object as argument, returns the shallow copy of first object', function() {
        expect(clone({first:1, sec:2}, {id:1, name:'javascript'})).toEqual({first:1, sec:2});
    });
});