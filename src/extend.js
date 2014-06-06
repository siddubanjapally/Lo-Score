/**
 * Created by jayakrishna on 6/6/14.
 */

var _extend = function(target, source) {
    for(var key in source)
        target[key] = source[key];
    return target;
};

var extend = function(obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    for(var o in args)
        obj = _extend(obj, args[o]);
    return obj;
};
