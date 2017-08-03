'use strict';

function double_to_one(collection) {

    //  var answerr = [];
      var answer = [];
      var answerr = [];
      answer = collection;
      for(var j=0;j<collection.length;j++)
      {      for(var k=0;k<collection[j].length;k++)
                  {answer.push(collection[j][k]);}
      }
    //  answer = collection.join(",").split(",");
    //  for(var i=0; i<answer.length; i++)
   //         var a = parseInt(answer[i])
    //        answerr.push(a)
  //在这里写入代码
      for(var j=0;j<answer.length;j++)
      {   if (typeof(answer[j])==='number')
                 { answerr.push(answer[j]);}}        
      answerr = unique(answerr)
      return answerr

}


function unique(arr){
// 遍历arr，把元素分别放入tmp数组(不存在才放)
var tmp = new Array();
for(var i in arr){
//该元素在tmp内部不存在才允许追加
if(tmp.indexOf(arr[i])==-1){
tmp.push(arr[i]);
}
}
return tmp;
}

module.exports = double_to_one;
