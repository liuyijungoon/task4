'use strict';
var map_to_three_multiples = function(collection){
      var i = 0;
      var answer = [];
      for (var i = 0 ;i<collection.length;i++)
      {
                  var a = 3*collection[i];
                  answer.push(a);
      }
      return answer
};

module.exports = map_to_three_multiples;
