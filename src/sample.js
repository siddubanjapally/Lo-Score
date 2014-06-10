/**
 * Created by chinna on 6/6/14.
 */

var sample = function(arr, num) {
    var result = [],
        arrayLength = arr.length,
        value;
    if(num || num === 0){
        for(var i = 0; i < num && i < arrayLength; ++i){
            value = arr[Math.floor(Math.random() * arr.length)];
            result.push(value);
            arr.splice(arr.indexOf(value), 1);
        }
        return result;
    }
    else
        return arr[Math.floor(Math.random() * arr.length)];
};


//var getResult = function(arr, num) {
//    var result = [],
//        arrayLength = arr.length,
//        value;
//    for(var i = 0; i < num && i < arrayLength; ++i){
//        value = arr[Math.floor(Math.random() * arr.length)];
//        result.push(value);
//        arr.splice(arr.indexOf(value), 1);
//    }
//    return result;
//};

//var sample = function(arr, num) {
//    if(num || num === 0)
//        return getResult(arr, num);
//    else
//        return arr[Math.floor(Math.random() * arr.length)];
//};