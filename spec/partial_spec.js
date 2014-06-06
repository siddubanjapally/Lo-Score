describe('partial',function() {
    it('it apply the given argument to the passing function', function() {
        expect(partial(function(a){
            return a ;
        },10)()).toEqual(10);
    });
    it('it apply the given partial two arguments to the passing function',function() {
       var add10 = partial(function(a,b){return a + b ;},10);
        expect(add10(10)).toEqual(20);
    });
    it('it apply the given partial three arguments to the passing function',function() {
        var add10 = partial(function(a,b,c){return a + b + c;},10);
        expect(add10(20,30)).toEqual(60);
    });
});