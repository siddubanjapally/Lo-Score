/**
 * Created by sidhu on 9/6/14.
 */

var min = function(coll) {
    var min = coll[0], index = -1;
    for(var i = 0; i < coll.length; ++i) {
        min = min < coll[i] ? min : coll[i];
        index = min === coll[i] ? i : index;
    }
    return [min,index];

}
var sort = function(coll,init) {
    var minIndex;
    while(coll.length){
        minIndex = min(coll);
        init.push(minIndex[0]);
        coll.splice(minIndex[1], 1);
    }
    return init;
}
var sortBy = function(list, f) {
    if(typeof f === 'function')
        return sort(map(list, f), []);
     return sort(list, []);
};