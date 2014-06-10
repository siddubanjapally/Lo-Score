var isValueAvailable = function(args, value) {
    for(var i = 0; i < args.length; ++i){
        if(args[i].indexOf(value) !== -1)
            return false;
    }
    return true;
};

var difference = function(arr) {
    var args = Array.prototype.slice.call(arguments, 1);
    var res = [];
    for(var i = 0; i < arr.length; ++i)
        (isValueAvailable(args, arr[i]) && res.indexOf(arr[i]) === -1) ? res.push(arr[i]) : '';
    return res;
};