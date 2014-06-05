describe('compose',function() {
    it('if we do not pass functions return error message',function() {
        expect(compose()).toEqual('You have to pass functions');
    });
    it('compose the given two functions ',function() {
        expect(compose(function(name) {return 'welcome ' + name;},function(stmt) {return stmt +' kumar';})('ravi')).toEqual('welcome ravi kumar');
    });
});