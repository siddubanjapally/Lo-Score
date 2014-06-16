describe('has', function() {
    it('it returns false if the given key is not exist in that object', function() {
        expect(has({name:'Java Script',year: 1995},'age')).toEqual(false);
    });
    it('it returns true if the given key is exist in that object', function() {
        expect(has({name:'Java Script',year: 1995},'name')).toEqual(true);
    });
});