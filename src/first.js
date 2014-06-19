/**
 * Created by sidhu on 5/6/14.
 */
var first = function(arr, n) {
    if(n === undefined) return arr[0];
    return map(range(0, n), function(i){
        return arr[i];
    });
};