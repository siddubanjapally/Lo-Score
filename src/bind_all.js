var isFunction = function(obj) {
    return typeof obj === 'function';
};
var bindAll = function(obj) {
    var args = Array.prototype.slice.call(arguments, 1);
   each(args, function(key) {
       if(obj[key] && isFunction(obj[key]))
          obj[key] = bind(obj[key],obj);
   });
   return obj;
};
