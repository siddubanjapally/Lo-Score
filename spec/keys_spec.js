describe('keys', function() {
    it('takes an object, returns an array contains the keys of object', function() {
        expect(keys({first:1, second:2, three:3, four:4})).toEqual(["first", "second", "three", "four"]);
    });
    it('if passed more than one object, returns first object keys', function() {
        expect(keys({first: 1, second: 2}, {one:1, two:2})).toEqual(["first", "second"]);
    });
    it('if passed undefined, returns empty array', function() {
        expect(keys()).toEqual([]);
    });
});