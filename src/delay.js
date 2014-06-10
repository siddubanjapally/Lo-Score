var delay = function(func,wait) {
    var args = [].slice.call(arguments,2);
   setTimeout(function() {
     return func.apply(this,args);
 },wait);
};