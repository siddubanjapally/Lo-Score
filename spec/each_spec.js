describe('each', function() {
    it('if we do not pass parameters then it will return undefined', function() {
        expect(each()).toEqual(undefined);
    });
    it('if we pass array list and an iterator function then the iterator function is executed on each element on that array ', function() {
        var test = 0;
        each([1,2,3],function(e) { test += e ;});
        expect(test).toEqual(6);
    });
    it('if we pass an object and an iterator function then the iterator function is executed on each property of that object', function(){
        var test = 0;
        each({a:1,b:2,c:3},function(e) { test += e ;});
        expect(test).toEqual(6);
    });
});