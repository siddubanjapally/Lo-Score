/**
 * Created by sidhu on 6/6/14.
 */
 var rest = function(arr, index) {
   return  index ? arr.splice(index) : arr.splice(1);
};