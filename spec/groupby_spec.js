/**
 * Created by sidhu on 9/6/14.
 */
describe('groupBy', function() {
    it('Splits a collection into sets, grouped by the result of running each value through iterator.',function() {
        expect(groupBy([1.3, 2.1, 2.4], function(num){
                return Math.floor(num);
            })
        ).toEqual({1: [1.3], 2: [2.1, 2.4]});
    });
    it('Splits a collection into sets, grouped by the result of running each value through iterator.',function() {
        expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({3: ["one", "two"], 5: ["three"]});
    });

});