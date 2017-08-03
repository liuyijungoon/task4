'use strict';

function choose_divisible_integer(collection_a, collection_b) {
      var answer = [];
      for(var i=0;i<collection_a.length;i++)
            if (contains(collection_b,collection_a[i] ))
                  answer.push(collection_a[i])
  //在这里写入代码
  function contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (obj%arr[i] === 0) {
      return true;
    }
  }
  return false;
}

      return answer
  //在这里写入代码
}

module.exports = choose_divisible_integer;
