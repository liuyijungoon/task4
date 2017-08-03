'use strict';

function choose_even(collection) {
      var i = 0;
      var answer = [];
      for (var i = 0 ;i<collection.length;i++)
      {
            if (collection[i]%2 == 0)
                  answer.push(collection[i]);
      }
      
      return answer
  //在这里写入代码
}

module.exports = choose_even;
