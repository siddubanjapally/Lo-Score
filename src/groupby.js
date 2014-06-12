/**
 * Created by sidhu on 9/6/14.
 */

var checkIterator = function(ele, f) {
    if(typeof f === 'function') return f(ele);
    if(ele.hasOwnProperty('length')) return ele.length;
    return f ? ele[f] : ele;
};
var groupBy = function(list, f) {
    var groups = {},
        length = list.length;
    for(var i = 0; i < length; ++i) {
        value = checkIterator(list[i], f);
        if(value in groups){
            groups[value].push(list[i]);
        }
        else{
            groups[value] =[list[i]];
        }
    }
    return groups;
 };