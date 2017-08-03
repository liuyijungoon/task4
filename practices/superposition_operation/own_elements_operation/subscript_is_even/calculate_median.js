'use strict';
var calculate_median = function(collection){
      var j=0;
      var arr = [];
      for(var i=0;i<Math.floor(collection.length/2);i++)
      {
            arr.push(collection[i*2+1]);
      }
      var mid = 0;
      
      if ((arr.length/2)%2 == 0)
      {
            var a = arr[arr.length/2];
            var b = arr[arr.length/2 - 1];
            mid = (parseInt(a) + parseInt(b))/2;
      }
      
      else
      {
            var mid = parseInt(arr[Math.floor(arr.length/2)]);
      }
      
      return mid
};
module.exports = calculate_median;
