'use strict';

function choose_multiples_of_three(collection) {
      var i = 0;
      var answer = [];
      for (var i = 0 ;i<collection.length;i++)
      {
            if (collection[i]%3 == 0)
                  answer.push(collection[i]);
      }
      
      return answer
  //在这里写入代码
}

module.exports = choose_multiples_of_three;
