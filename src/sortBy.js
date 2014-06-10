/**
 * Created by sidhu on 9/6/14.
 */
var mapArray = function(arr, f, init) {
    for(var i = 0; i < arr.length; ++i)
       init.push(f(arr[i]));
    return init;
};

var sortBy = function(list,f) {
    if(typeof f === 'function')
        return mapArray(list,f,[]);
    if(typeof f === 'undefined' || f === 'length')
        return list.sort();
    return list.sort(function (a, b) {
        if (a[f] > b[f])
            return 1;
        if (a[f] < b[f])
            return -1;
        return 0;
    });
};