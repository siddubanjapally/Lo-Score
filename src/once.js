var once = function(func) {
    var onetime=false,funcstore;
    return function() {
        if(onetime) return funcstore;
        onetime = true;
        funcstore = func.apply(null,arguments);
        return funcstore;
    };
};