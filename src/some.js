/**
 * Created by chinna on 5/6/14.
 */

var some = function(arr, func) {
    for(var i = 0; i < arr.length; ++i)
        if(func(arr[i]))
            return true;
    return false;
};