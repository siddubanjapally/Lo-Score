var each = function(obj,iterator,context) {
    if(obj === undefined) return obj;
    context || null
    if(obj.length === +obj.length){
        for(var i = 0; i < obj.length; i++) {
            iterator.call(context, obj[i], i, obj);
        };
    } else {
        var keyslist = keys(obj);
        for(var i = 0; i < keyslist.length; i++) {
            iterator.call(context, obj[keyslist[i]], keyslist[i], obj);
        };
    }
    return obj;
};