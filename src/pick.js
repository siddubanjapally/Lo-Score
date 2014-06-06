/**
 * Created by jayakrishna on 5/6/14.
 */

var getKeys = function(obj) {
    var result = [];
    for(var key in obj)
        result.push(key);
    return result;
};

var invoke = function(args, key, obj) {
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

var getResult = function(arr, obj) {
    var resObj = {};
    for(var i in arr)
        resObj[arr[i]] = obj[arr[i]];
    return resObj;
};

var pick = function(obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    var keys = getKeys(obj), res = [];
    for(var k in keys)
        res = res.concat(invoke(args, keys[k], obj));
    return getResult(res, obj);
};
