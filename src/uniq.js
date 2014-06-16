
var uniq = function(arr,iterator) {
   if(!arr) return [];
  return reduce(arguments.length > 1 ? map(arr,iterator) : arr, function(value,seed) {
        if(seed.indexOf(value) === -1)
            seed.push(value);
       return seed;
  },[]);
};