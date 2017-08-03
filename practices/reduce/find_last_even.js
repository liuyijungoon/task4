'use strict';

function find_last_even(collection) {
      var j=0;
      for(var i=0;i<collection.length;i++)
      {
            if(parseInt(collection[i])%2 == 0)
            {
                   j=collection[i];

            }
      }
       return j;
}

module.exports = find_last_even;
