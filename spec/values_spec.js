describe('values', function() {
    it('if passed an object, returns values of that object', function() {
        expect(values({first:1, second:2, third:3})).toEqual([1, 2, 3]);
    });
    it('if passed more than one object, returns values of first object', function() {
        expect(values({first:1, second:2, third:3}, {one:1, two:2})).toEqual([1, 2, 3]);
    });
    it('if passed undefined, returns an empty array', function() {
        expect(values()).toEqual([]);
    });
    it('if passed other than object type, returns an empty array', function() {
        expect(values('string')).toEqual([]);
    });
});
