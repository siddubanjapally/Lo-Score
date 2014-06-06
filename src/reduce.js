/**
 * Created by chinna on 4/6/14.
 */

var reduce = function(arr, func, seed) {
    for(var i = 0; i < arr.length; ++i)
        seed = func(arr[i], seed);
    return seed;
};