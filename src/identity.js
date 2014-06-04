/*** Created by sidhu on 4/6/14.*/
    
var identity = function(value) {
    return value;
};

var times = function(n, fun) {
    var output =[];
    for (var i = 0; i < n; i++)
        output[i] = fun();
    return output;
};

var result = function(object, property) {
    if (object === null) return false;
    var value = object[property];
    return typeof(value) === 'function' ? value.call(object) : value;
};
