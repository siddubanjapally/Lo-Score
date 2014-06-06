/**
 * Created by jayakrishna on 6/6/14.
 */

var clone = function(obj) {
    var copy = {};
    for(var key in obj)
        copy[key] = obj[key];
    return copy;
};