/**
 * Created by sidhu on 4/6/14.
 */
describe('identity', function() {
    it('takes anything and returns  the same value', function() {
       expect(identity([1,2])).toEqual([1,2]);
    });
});

describe('times', function() {
    it('invoke given iterator n times and return array of returned values', function() {
        expect(times(3,function() { return 'hello'; })).toEqual(['hello', 'hello', 'hello']);
    });
});

describe('result', function() {
    it('If the value of the named property is a function then invoke it', function() {
        expect(result({name: 'siddu', sayHi: function() {return 'hi '+ this.name ; }}, 'sayHi')).toEqual('hi siddu');
    });

    it('If the object is empty then return 0', function () {
        expect(result({}, name)).toEqual(undefined);
    });
});