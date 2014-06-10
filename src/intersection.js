/**
 * Created by jayakrishna on 9/6/14.
 */

var minArray = function(args) {
    var res = 0,
        arr = [],
        i = 0;
    for( ; i < args.length; ++i) {
        res = res > args[i].length ? res : args[i].length;
        arr = args[i];
    }
    return arr;
};

var isValueExists = function(args, value) {
    var i = 0;
    for( ; i < args.length; ++i){
        if(args[i].indexOf(value) === -1){
            return false;
        }
    }
    return true;
};

var intersection = function() {
    var args = Array.prototype.slice.call(arguments),
        arr = minArray(args),
        res = [],
        i = 0;
    for( ; i < arr.length; ++i)
        (isValueExists(args, arr[i]) && res.indexOf(arr[i]) === -1) ? res.push(arr[i]) : '';
    return res;
};
