describe('bind',function() {
    it('it binds the passing function to passing object without arguments',function() {
        var func = function() { return this.name; };
        expect(bind(func ,{name:'ravi'})()).toEqual('ravi');
    });
   it('it binds passing function to passing object with arguments',function(){
       var func = function(greetings) { return greetings + this.name; };
       expect(bind(func, {name:'javascript'})('Welcome to ')).toEqual('Welcome to javascript');
   });
});