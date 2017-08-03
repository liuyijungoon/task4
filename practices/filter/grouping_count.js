'use strict';

function grouping_count(collection) { 
  var answer = {};
  var key=[];
  var num=[];
  for(var i=0;i<collection.length;i++)
  {
    var temp=collection[i];
    var count=0;
    for(var j=0;j<collection.length;j++)
    {
      if(collection[j]==temp)
      {
        count++;
        collection[j]=-1;
      }
    }
    if(temp != -1){
          key.push(temp)
          num.push(count)
     // answer.push(temp+":"+count)
    }
  }

      for(var j=0;j<key.length;j++)
            answer[key[j]] = num[j]
  return answer;
  //在这里写入代码
}

module.exports = grouping_count;
