describe('compose',function() {
    it('it takes two functions as parameters, first function takes a second function returned value and it returns final output ',function() {
        expect(compose(function(name) {return 'welcome ' + name;},function(stmt) {return stmt +' kumar';})('ravi')).toEqual('welcome ravi kumar');
    });
    it('if we give three functions as parameters, then we get final result ',function() {
        var add = function(name) {return 10 + name;};
        var multiply = function(num) { return num*2;};
        var convertStringToNumber = function(str) { return +str;};
        expect(compose(add,multiply,convertStringToNumber)('10')).toEqual(30);
    });
});