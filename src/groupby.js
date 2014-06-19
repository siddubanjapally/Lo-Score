/**
 * Created by sidhu on 9/6/14.
 */

var checkIterator = function(ele, f) {
    if(typeof f === 'function')
        return f(ele);
    return f ? ele[f] : ele;
};
var groupBy = function(list, f) {
    var groups = {};
    each(list, function(i) {
        value = checkIterator(i, f);
        value in groups ? groups[value].push(i) : groups[value] = [i];
    });
    return groups;
 };