var getKeys = function(obj) {
    var result = [];
    for(var key in obj)
        result.push(key);
    return result;
};

var getArgsKeys = function(args, key, obj) {
    var result = [];
    for(var i = 0; i < args.length; ++i) {
        if(typeof args[i] === 'function') {
            if(args[i](key, obj[key]))
                result.push(key);
        }
        else if(typeof args[i] === 'string'){
            if(args[i] in obj)
                result.push(args[i]);
        }
    }
    return result;
};

var _omit = function(arr, obj) {
    for(var i in arr) {
        if(arr[i] in obj)
            delete obj[arr[i]];
    }
    return obj;
};

var omit = function(obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    var keys = getKeys(obj), res = [];
    for(var k in keys)
        res = res.concat(getArgsKeys(args, keys[k], obj));
    return _omit(res, obj);
};