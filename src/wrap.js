
var wrap = function(func, wrapfunc) {
  return partial(wrapfunc, func);
};