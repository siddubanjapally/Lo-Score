/**
 * Created by jayakrishna on 6/6/14.
 */

var functions = function(obj) {
    var names = [];
    for(var key in obj) {
        if(typeof obj[key] === 'function')
            names.push(key);
    }
    return names;
};