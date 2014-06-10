var partial = function(func) {
    var args = [].slice.call(arguments,1);
    return function() {
        for(var i=0;i<arguments.length;i++)
            args.push(arguments[i]);
        return func.apply(this,args);
    };
};
var wrap = function(func,wrapfunc) {
  return partial(wrapfunc,func);
};