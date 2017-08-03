'use strict';
function map_to_even(collection){
      var i = 0;
      var answer = [];
      for (var i = 0 ;i<collection.length;i++)
      {
                  var a = 2*collection[i];
                  answer.push(a);
      }
      return answer
}
module.exports = map_to_even;

