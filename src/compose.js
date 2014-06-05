var compose = function(){
    var funcs = arguments;
    if(funcs.length === 0) return 'You have to pass functions';
    return function(){
        var args = arguments;
        for(var i=funcs.length-1;i>=0;i--){
            args = [funcs[i].apply(this, args)];
        }
        return args[0];
    };
};
