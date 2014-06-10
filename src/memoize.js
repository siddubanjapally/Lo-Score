var hasProperty = function(obj,key) {
    return obj.hasOwnProperty(key);
};
var memoize = function(func) {
    var memory = {};
    return function() {
        var arg = arguments[0];
        if(hasProperty(memory,arg)) return memory[arg];
        memory[arg] = func.call(null,arg);
        return memory[arg];
    };
};