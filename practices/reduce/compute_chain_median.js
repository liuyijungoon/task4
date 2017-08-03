'use strict';

function compute_chain_median(collection) {
      var collection_a = collection.match(/\d+/g);
      collection_a.sort(function(a, b)
      {
            return b - a;
      }
      )
      var mid = 0;
      
      if ((collection_a.length/2)%2 == 0)
      {
            var a = collection_a[collection_a.length/2];
            var b = collection_a[collection_a.length/2 - 1];
            mid = (parseInt(a) + parseInt(b))/2;
      }
      
      else
      {
            var mid = collection_a[collection_a[floor(collection_a.length/2)]];
      }
      
      return mid
}

module.exports = compute_chain_median;


