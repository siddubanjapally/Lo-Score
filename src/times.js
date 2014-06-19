/**
 * Created by sidhu on 12/6/14.
 */
var times = function(n, fun) {
    return map(range(0, n), function(){
        return fun();
    });
};
