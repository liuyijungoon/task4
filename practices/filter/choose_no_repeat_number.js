      'use strict';



function choose_no_repeat_number(collection) {
      var answer = [];
      for(var i=0; i < collection.length ; i++)
            if (contains(answer, collection[i]))   //true表示没有
                  answer.push(collection[i])
      return answer
  //在这里写入代码
}

function contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) {
      return false;
    }
  }
  return true;
}
module.exports = choose_no_repeat_number;
