/**
 * Created by sidhu on 6/6/14.
 */
var flatten = function(arr) {
    var result = [];
    each(arr, function(value) {
        Array.prototype.push.apply(result, Array.isArray(value) ? flatten(value) : [value]);
    });
    return result;
};
