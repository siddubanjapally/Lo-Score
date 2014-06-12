/**
 * Created by sidhu on 5/6/14.
 */

var first = function(arr, n) {
    if(n === undefined) return arr[0];

    var resultArray = [];
    for(var i = 0; i < n; ++i)
        resultArray.push(arr[i]);
    return resultArray;
};