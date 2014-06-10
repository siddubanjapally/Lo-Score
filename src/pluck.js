/**
 * Created by chinna on 6/6/14.
 */

var pluck = function(arr, propertyName) {
    var result = [];
    for(var i = 0; i < arr.length; ++i)
        result.push(arr[i][propertyName]);
    return result;
};
