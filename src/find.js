/**
 * Created by chinna on 4/6/14.
 */

var find = function(arr, func) {
    for(var i = 0; i < arr.length; ++i)
        if(func(arr[i]))
            return arr[i];
};
