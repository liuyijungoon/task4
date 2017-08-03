'use strict';
var single_element = function(collection){
      var evennum = choose_evennum(collection);
      var answer = choose_no_repeat_number(evennum) 
      return answer
};

function choose_evennum(collection) {                                   //数组中的所有第偶数个元素
      var arr = [];
      for(var i=0;i<Math.floor(collection.length/2);i++)
      {
            arr.push(collection[i*2+1]);
      }
      return arr
  //在这里写入代码
}

function choose_no_repeat_number(collection) {
      var answer = [];
      var flag1 = [];
      for(var i=0; i < collection.length ; i++)
      {
            if (contains(answer, collection[i]) && (contains(flag1, collection[i])))   //true表示没有
            { flag1.push(collection[i]);
                  answer.push(collection[i]);}     
            else
                 {answer = deletea(answer,collection[i]);}
      }     
 //     return collection      
                  
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

function deletea(collection,ch) {
    var result=[];
    for (var ss of collection)
    {
        if (ss!=ch)
        {
            result.push(ss)
        }

    }
    return result;
}
module.exports = single_element;
