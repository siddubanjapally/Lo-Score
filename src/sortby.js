/**
 * Created by sidhu on 9/6/14.
 */

var sort = function(coll, init) {
    var minValue;
    while(coll.length){
        minValue = min(coll);
        init.push(minValue);
        coll.splice(coll.indexOf(minValue), 1);
    }
    return init;
};
var sortBy = function(list, f) {
    if(typeof f === 'function')
        return sort(map(list, f), []);
    return sort(list, []);
};