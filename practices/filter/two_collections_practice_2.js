'use strict';

function choose_no_common_elements(collection_a, collection_b) {
      var answer = [];
      for(var i=0;i<collection_a.length;i++)
            if (contains(collection_b,collection_a[i] ))
                  answer.push(collection_a[i])
      for(var i=0;i<collection_b.length;i++)
            if (contains(collection_a,collection_b[i] ))
                  answer.push(collection_b[i])
  //在这里写入代码
  function contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) {
      return false;
    }
  }
  return true;
}

      return answer
}

module.exports = choose_no_common_elements;
