/**
 * Created by chinna on 6/6/14.
 */

var getResult = function(arr, num) {
    var result = [],
        value,
        length = arr.length,
        index;
    for(var i = 0; i < num && i < length; ++i){
        value = arr[Math.floor(Math.random() * arr.length)];
        result.push(value);
        index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return result;
};

var sample = function(arr, num) {
    if(num || num == 0)
        return getResult(arr, num);
    else
        return arr[Math.floor(Math.random() * arr.length)];
};
