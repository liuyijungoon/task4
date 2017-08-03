'use strict';

function choose_common_elements(collection_a, collection_b) {
      var answer = [];
      for(var i=0;i<collection_a.length;i++)
            if (contains(collection_b,collection_a[i] ))
                  answer.push(collection_a[i])
  //在这里写入代码
  function contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) {
      return true;
    }
  }
  return false;
}

      return answer
}

module.exports = choose_common_elements;
