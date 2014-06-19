/**
 * Created by sidhu on 19/6/14.
 */
var min = function(coll) {
    var min = coll[0];
    each(coll, function(i){
        min = min < i ? min : i;
    }) ;
    return min;
};