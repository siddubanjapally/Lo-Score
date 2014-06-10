describe('memoize the previous function result', function() {
    it('check for the given argument', function() {
       var data = {person1: { name:'js', age: 20},
         person2: { name:'ember', age: 10}};
        var person = memoize(function(name) { return data[name]; });
        expect(person('person1')).toEqual({ name:'js', age: 20});
    });
});