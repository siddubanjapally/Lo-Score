/**
 * Created by sidhu on 12/6/14.
 */
var times = function(n, fun) {
    var output = [];
    for (var i = 0; i < n; ++i)
        output[i] = fun();
    return output;
};