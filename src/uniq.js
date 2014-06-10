var reduceArray = function(array) {
    var res = [],i;
    for(i in array){
        if(res.indexOf(array[i]) === -1) res.push(array[i]);
    }
    return res;
};

var map = function(arr, f,context) {
    var mapped = [];
    for(var i = 0; i < arr.length; ++i)
        mapped.push(f.call(context,arr[i]));
    return mapped;
};

var uniq = function(array,iterator,context) {
    if(arguments.length > 1) return reduceArray(map(array,iterator,context));
    return reduceArray(array);
};