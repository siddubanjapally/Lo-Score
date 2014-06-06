/**
 * Created by chinna on 5/6/14.
 */

var every = function(arr, func) {
    for(var i = 0; i < arr.length; ++i)
        if(! func(arr[i]))
            return false;
    return true;
};
