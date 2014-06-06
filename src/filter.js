/**
 * Created by chinna on 4/6/14.
 */

var filter = function(arr, func) {
    var filtered = [];
    for(var i = 0; i < arr.length; ++i)
        if(func(arr[i]))
            filtered.push(arr[i]);
    return filtered;
};
