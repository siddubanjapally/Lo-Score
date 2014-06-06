describe('once',function() {

    it('the given function first time initialization ',function() {
        var initial = once(function(greatings) {return greatings + ' ravi' ;});
        expect(initial('welcome')).toEqual('welcome ravi');
    });
    it('the passing function  second time initialization',function() {
        var initial = once(function(greatings) {return greatings + ' ravi' ;});
       expect(initial('bye')).toEqual('bye ravi');
       expect(initial()).toEqual('bye ravi');
       expect(initial('welcome')).toEqual('bye ravi');
    });
    it('if we initialize three or more times, it will give same output',function() {
        var initial = once(function(greatings) {return greatings + ' ravi' ;});
        expect(initial('welcome')).toEqual('welcome ravi');
        expect(initial('hi')).toEqual('welcome ravi');
        expect(initial()).toEqual('welcome ravi');
        expect(initial('hello')).toEqual('welcome ravi');
    });
});