/**
 * Created by chinna on 4/6/14.
 */

var reduce = function(arr, f, init) {
    for(var i = 0; i < arr.length; ++i)
        init = f(arr[i], init);
    return init;
};