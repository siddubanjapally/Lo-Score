/**
 * Created by jayakrishna on 5/6/14.
 */

describe('pick', function() {
    it('if passed more than one argument, returns a copy of the object which it contains what you passed', function() {
        expect(pick({first:1, second:2}, 'first', 'second')).toEqual({first:1, second:2});
    });
    it('if passed undefined, returns an empty object', function() {
        expect(pick()).toEqual({});
    });
    it('if passed only object without having any arguments, returns given object', function() {
        expect(pick({first:1})).toEqual({});
    });
    it('if passed more than one arguments, returns keys which u have given', function() {
        expect(pick({first:1, second:2}, 'first')).toEqual({first:1});
    });
    it('if passed an object and a callback, returns based on callback value', function() {
        expect(pick({id:1, lang:'Javascript'}, function(key, value) {
            return typeof value === 'number';
        })).toEqual({id:1});
    });
    it('if passed an object and a callback, returns based on callback value', function() {
        expect(pick({id:1, lang:'Javascript'}, function(key, value) {
            return typeof key === 'string';
        })).toEqual({id:1, lang:'Javascript'});
    });
    it('if passed an object and a callback, returns based on callback value', function() {
        expect(pick({id:1, lang:'Javascript'}, function(key, value) {
            return typeof key === 'number';
        })).toEqual({});
    });
    it('if passed an object and a callback, returns based on callback value', function() {
        expect(pick({id:1, lang:'Javascript'}, function(key, value) {
            return typeof key === 'number';
        }, 'id')).toEqual({id:1});
    });
    it('if passed an object and a callback along with multiple arguments, returns based on callback value', function() {
        expect(pick({id:1, lang:'Javascript'}, function(key, value) {
            return typeof key === 'number';
        }, 'id', 'name', 'lang')).toEqual({id:1, lang:'Javascript'});
    });
});
