/**
 * Created by sidhu on 6/6/14.
 */
var singleDepthArray = function(item) {
    return Array.isArray(item) ? flatten(item) : [item];
};

var flatten = function(arr) {
    var result = [];
    arr.forEach(function(value) {
        [].push.apply(result,singleDepthArray(value));
    });
    return result;
};