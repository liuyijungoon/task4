'use strict';

function compute_median(collection) {
//      var collection = collection;
      collection.sort(function(a, b)
      {
            return b - a;
      }
      )
      var mid = 0;
      
      if ((collection.length/2)%2 == 0)
      {
            var a = collection[collection.length/2];
            var b = collection[collection.length/2 - 1];
            mid = (parseInt(a) + parseInt(b))/2;
      }
      
      else
      {
            var mid = parseInt(collection[Math.floor(collection.length/2)]);
      }
      
      return mid
}

module.exports = compute_median;


