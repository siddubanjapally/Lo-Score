/**
 * Created by sidhu on 5/6/14.
 */
describe('random', function() {
    it('takes  two values and returns a value (min included and max exclude)', function() {
        expect(random(1, 4)).toBeLessThan(5);
    });
});