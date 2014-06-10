
var maximumArray = function(arrayList) {
   var length = arrayList.length, maximum = arrayList[0], i=1;
    for(; i < length; i++){
        if(maximum.length < arrayList[i].length)
            maximum = arrayList[i];
    }
    return maximum;
};
var getArray = function(arrayList,index) {
    var length = arrayList.length, i = 0, result = [];
    for(; i < length; i++)
      result.push(arrayList[i][index]);
    return result;
};
var zip = function() {
    if(arguments.length <= 1) return [];
    var length = maximumArray(arguments).length, i= 0, result = [];
    for(; i < length; i++)
        result.push(getArray(arguments, i));
    return result;
};