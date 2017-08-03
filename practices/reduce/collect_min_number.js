'use strict';

function collect_min_number(collection) {
        var min = collection[0];
      var len = collection.length;
      for (var i = 1; i < len; i++)
      { 
            if (collection[i] < min)
            { 
                  min = collection[i]; 
            } 
      } 
      return min;
}

module.exports = collect_min_number;

