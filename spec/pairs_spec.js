describe('pairs', function() {
    it('if passed undefined, returns an empty array', function() {
        expect(pairs()).toEqual([]);
    });
    it('if passed an object, returns the key value pairs as like an array of arrays', function() {
        expect(pairs({first:1, second:2, three:3})).toEqual([['first', 1], ['second', 2], ['three', 3]]);
    });
    it('if passed more than one object, returns the key value pairs of first object as like an array of arrays', function() {
        expect(pairs({first:1}, {second:2})).toEqual([['first', 1]]);
    });
    it('if passed other than an object type, returns an empty array', function() {
        expect(pairs('string')).toEqual([]);
    });
});
