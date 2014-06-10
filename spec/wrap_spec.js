describe('wrap', function() {
    it('the first function into the second function', function() {
        var greatings = function(name) { return 'Hi ' + name + '!' ;};
        expect(wrap(greatings, function(func) {
            return func('ravi');
        })()).toEqual('Hi ravi!');
    });
    it('if we pass function, wrapper function and arguments then wrapper apply those arguments into that function', function() {
        var greatings = function(greating,name) {return greating + ' ' + name + '!' ;};
        var wrapperfunc = function(func) { return func('welcome','ravi');};
        expect(wrap(greatings,wrapperfunc)('hi')).toEqual('welcome ravi!');
    });
});