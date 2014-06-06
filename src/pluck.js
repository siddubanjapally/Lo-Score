/**
 * Created by chinna on 6/6/14.
 */

var getValue = function(obj, propertyName) {
    for(var key in obj)
        return obj[propertyName];
};

var pluck = function(arr, propertyName) {
    var result = [];
    for(var i = 0; i < arr.length; ++i)
        result.push(getValue(arr[i], propertyName));
    return result;
};
