/**
 * Created by jayakrishna on 6/6/14.
 */
describe('extend', function() {
    it('if passed undefined, return an empty object', function() {
        expect(extend()).toEqual(undefined);
    });
    it('if passed only one object, returns the same object', function() {
        expect(extend({id:1, name:'javascript'})).toEqual({id:1, name:'javascript'});
    });
    it('if passed only one argument along with target object, returns extended object', function() {
        expect(extend({id:2, name:'EmberJs'}, {model: 'mvc'})).toEqual({id:2, name:'EmberJs', model:'mvc'});
    });
    it('if passed more than one argument along with target object, returns extended object', function() {
        expect(extend({first:1}, {sec:2}, {third:3}, {fourth:4})).toEqual({first:1, sec:2, third:3, fourth:4});
    });
    it('if passed an argument along with target object which it contains the same property names, so last source will override properties of the same name in previous arguments', function() {
        expect(extend({id:1, lang:'javascript'}, {model:'mvc', lang:'EmberJs'})).toEqual({id:1, model:'mvc', lang:'EmberJs'});
    });
});