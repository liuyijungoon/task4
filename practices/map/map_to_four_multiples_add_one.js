'use strict';
var map_to_four_multiples_add_one = function(collection){
      var i = 0;
      var answer = [];
      for (var i = 0 ;i<collection.length;i++)
      {
                  var a = 4*collection[i]+1;
                  answer.push(a);
      }
      return answer
};

module.exports = map_to_four_multiples_add_one;
