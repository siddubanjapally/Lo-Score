var map = function(arr, f) {
    var mapped = [];
    if(arr === undefined)
        return [];
    for(var i = 0; i < arr.length; ++i)
        mapped.push(f(arr[i]));
    return mapped;
};
