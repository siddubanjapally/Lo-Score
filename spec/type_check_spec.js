/**
 * Created by chinna on 12/6/14.
 */

describe('type_check', function() {
    it('', function() {
        expect(isUndefined()).toEqual(true);
    });
    it('', function() {
        expect(isNull(null)).toEqual(true);
    });
    it('', function() {
        expect(isNumber(2)).toEqual(true);
    });
    it('', function() {
        expect(isString('techno')).toEqual(true);
    });
    it('', function() {
        expect(isArray([1, 2, 3])).toEqual(true);
    });
    it('', function() {
        expect(isObject({id: 1, name: "techno"})).toEqual(true);
    });
});