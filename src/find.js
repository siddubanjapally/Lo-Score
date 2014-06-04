/**
 * Created by chinna on 4/6/14.
 */

var find = function(arr, f) {
    for(var i = 0; i < arr.length; ++i){
        if(f(arr[i]))
            return arr[i];
    }
};
