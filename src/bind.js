var bind = function(func, obj) {
    return function() {
         return func.apply(obj, arguments);
    };
};
var bindAll = function(obj) {
    var args = Array.prototype.slice.call(arguments,1);
    if(args.length === 0) return 'must be given a method names';
    args.forEach(function(f){
        obj[f] = bind(obj[f],obj);
    });
    return obj;
};
