/**
 * Created by jayakrishna on 6/6/14.
 */
describe('functions', function() {
    it('if passed undefined, returns an empty array', function() {
        expect(functions()).toEqual([]);
    });
    it('if passed one argument, returns the names of functions which it has', function() {
        expect(functions({first:1, method: function() {}})).toEqual(['method']);
    });
    it('if passed more than one argument, returns the names of functions which it has', function() {
        expect(functions({id:1, names:function() {}, a:function() {}})).toEqual(['names', 'a']);
    });
});