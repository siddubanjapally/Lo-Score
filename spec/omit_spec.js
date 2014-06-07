describe('omit', function() {
    it('if passed an object along with arguments what to omit from the object, returns the omitted object', function() {
        expect(omit({name:'javaScript'}, 'name')).toEqual({});
    });
    it('if passed an object along with arguments what to omit from the object, returns the omitted object', function() {
        expect(omit({id:1, lang:'javaScript', type:'script'}, 'type', 'id')).toEqual({lang:'javaScript'});
    });
    it('if passed an object and without specifying what to omit, returns the given object', function() {
        expect(omit({firstName:'javaScript', lastName:'ECMAScript'})).toEqual({firstName:'javaScript', lastName:'ECMAScript'});
    });
    it('if passed an object and a callback for omitting some properties, returns the omitted object', function() {
        expect(omit({rating:5, lang:'javaScript'}, function(key, value) {
            return typeof value === 'number';
        })).toEqual({lang:'javaScript'});
    });
    it('if passed an object and a callback along with multiple arguments, returns based on callback value', function() {
        expect(omit({id:1, lang:'Javascript', name:'ECMAScript'}, function(key, value) {
            return typeof value === 'number';
        }, 'name', 'lang')).toEqual({});
    });
});