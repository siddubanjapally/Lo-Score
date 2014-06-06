/**
 * Created by chinna on 6/6/14.
 */

var shuffle = function(arr) {
  var result = [],
      arrayLength = arr.length,
      value;
  for(var i = 0; i < arrayLength; ++i){
      value = arr[Math.floor(Math.random() * arr.length)];
      result.push(value);
      arr.splice(arr.indexOf(value), 1);
  }
  return result;
};
