var keys = function(obj) {
    var result = [];
    if(typeof obj !== 'object')
        return [];
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            result.push(key);
    }
    return result;
};