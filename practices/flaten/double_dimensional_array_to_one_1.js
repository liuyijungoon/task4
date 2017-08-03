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
      return answerr
}
     
module.exports = double_to_one;
