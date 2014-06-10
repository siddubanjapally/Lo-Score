/**
 * Created by jayakrishna on 9/6/14.
 */

var unique = function(arr) {
    var res = [],
        i;
    for(i in arr)
        res.indexOf(arr[i]) < 0 ? res.push(arr[i]) : '';
    return res;
};

var union = function() {
    var uniqueItems = [],
        i = 0;
    for( ; i < arguments.length; ++i)
        uniqueItems = uniqueItems.concat(arguments[i]);
    return unique(uniqueItems);
};
