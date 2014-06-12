var bind = function(func, obj) {
    return function() {
         return func.apply(obj, arguments);
    };
};
