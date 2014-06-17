/**
 * Created by sidhu on 17/6/14.
 */
var range = function(start,end) {
    if(arguments.length === 1) {
        end = start;
        start = 0;
    }
    var result = [], i;
    for( i = start; i < end; ++i)
        result.push(i);
    return result;
};