var partition = function(array, predicate) {
    var i = 0, trueValues = [], falseValues = [];
    for(;i < array.length; i++)
        (predicate(array[i]) ? trueValues : falseValues).push(array[i]);
    return [trueValues,falseValues];
};