/**
 * Created by sidhu on 12/6/14.
 */
var result = function(object, property) {
    var value = object[property];
    return typeof(value) === 'function' ? value.call(object) : value;
};
