/**
 * Created by sidhu on 6/6/14.
 */
var flatten = function(arr) {
    var result = [];
    each(arr,function(value) {
        [].push.apply(result,Array.isArray(value) ? flatten(value) : [value]);
    });
    return result;
};
//var flatten = function() {
//    return reduce(arguments,
//        function(acc, e) {
//            return concat(acc, isArray(e) ? flatten(e) : [e]);
//        }
//    );
//};