'use strict';

function collect_max_number(collection) {
      var max = collection[0];
      var len = collection.length;
      for (var i = 1; i < len; i++)
      { 
            if (collection[i] > max)
            { 
                  max = collection[i]; 
            } 
      } 
      return max;
}

module.exports = collect_max_number;
