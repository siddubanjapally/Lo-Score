/**
 * Created by chinna on 12/6/14.
 */

describe('type_check', function() {
    it('if it takes with no parameters returns true', function() {
        expect(isUndefined()).toEqual(true);
    });
    it('if it takes null returns true', function() {
        expect(isNull(null)).toEqual(true);
    });
    it('if it takes number returns true', function() {
        expect(isNumber(2)).toEqual(true);
    });
    it('if it takes string returns true', function() {
        expect(isString('techno')).toEqual(true);
    });
    it('if it takes an array returns true', function() {
        expect(isArray([1, 2, 3])).toEqual(true);
    });
    it('it takes object returns true', function() {
        expect(isObject({id: 1, name: 'techno'})).toEqual(true);
    });
});