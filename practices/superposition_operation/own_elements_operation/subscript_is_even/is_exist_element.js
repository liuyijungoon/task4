'use strict';
var is_exist_element = function(collection,element){
      var evennum = choose_evennum(collection);
      return contains(evennum, element)
};

function contains(arr, obj) {                               //判断元素是否在数组中
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) {
      return true;
    }
  }
  return false;
}

function choose_evennum(collection) {                                   //数组中的所有第偶数个元素
      var arr = [];
      for(var i=0;i<Math.floor(collection.length/2);i++)
      {
            arr.push(collection[i*2]);
      }
      return arr
  //在这里写入代码
}
module.exports = is_exist_element;
