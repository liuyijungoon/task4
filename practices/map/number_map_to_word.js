'use strict';
var number_map_to_word = function(collection){
      var zimu = [ 'kongwei','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                  't', 'u', 'v', 'w', 'x','y', 'z'];
      var answer = [];
      for (var i = 0;i<collection.length;i++)
      {
            if (collection[i] < 26)
                  {
                        answer.push(zimu[collection[i]]);
                  }
            else if (collection[i] > 26 && collection[i] < 52)
                  {
                        answer.push('a'+zimu[collection[i]-26]);
                   }
      }
      
      return answer;
};

module.exports = number_map_to_word;
