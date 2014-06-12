/**
 * Created by sidhu on 6/6/14.
 */
var flatten = function(arr) {
    var result = [];
    arr.forEach(function(value) {
        [].push.apply(result,Array.isArray(value) ? flatten(value) : [value]);
    });
    return result;
};