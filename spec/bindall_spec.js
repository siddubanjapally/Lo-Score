describe('bindAll',function() {
    it('throws an error if we do not pass method names',function() {
        expect(bindAll({name:'javascript', displayname:function() {return this.name;} })).toEqual('must be given a method names');
    });
    it('bind the given method to the passing object',function() {
       expect(bindAll({name:'javascript', displayname:function() {return this.name;} },'displayname').displayname()).toEqual('javascript');
    });
    it('bind the given two methods to the passing object',function() {
        expect(bindAll({name:'javascript', displayname:function() {return this.name;},changename:function() { this.name = 'ravi';} },'changename','displayname').changename()).toEqual(undefined);
    });
});