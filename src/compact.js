/**
 * Created by sidhu on 6/6/14.
 */
var compact = function(arr) {
    var result = [];
    arr.forEach(function(i) {
        if(i) result.push(i);
    });
    return result;
};
