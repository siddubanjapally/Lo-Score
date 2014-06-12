
var bindAll = function(obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    map(args, function(f) {
        obj[f] = bind(obj[f], obj);
    });
    return obj;
};
