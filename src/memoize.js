var memoize = function(func) {
    var memory = {};
    return function() {
        var arg = arguments[0];
        if(has(memory,arg)) return memory[arg];
        memory[arg] = func.call(null,arg);
        return memory[arg];
    };
};