'use strict';
var even_group_calculate_average = function(collection){
      var answer = [];
      var even = [];
      var arr_1 = [];
      var arr_2 = [];
      var arr_3 = [];
      var arr = choose_evennum(collection);
      even = choose_even(arr);
      if (even.length == 0 )
         return [0];
      else
      {
            arr_1 = anweishufenzu_1(even);
            arr_2 = anweishufenzu_2(even);
            arr_3 = anweishufenzu_3(even);
            if (arr_1.length == 0 && arr_2.length == 0)
            {
                  var aver = compute_average(arr_3);
                  answer.push(aver);
                  return answer
            }     
            else
            {
                  var aver1 = compute_average(arr_1);
                  var aver2 = compute_average(arr_2);
                  var aver3 = compute_average(arr_3);
                  answer.push(aver1);
                  answer.push(aver2);
                  answer.push(aver3);
                  return answer
            }
      }
};

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

function choose_evennum(collection) {
      var arr = [];
      for(var i=0;i<Math.floor(collection.length/2);i++)
      {
            arr.push(collection[i*2+1]);
      }
      return arr
  //在这里写入代码
}

function anweishufenzu_1(collection)                  //返回输入数组中所有位数组成的数组
{
      var arr = [];
      for(var i=0;i<Math.floor(collection.length);i++)
      {
            if(collection[i]>0 && collection[i]<10)
                  {arr.push(collection[i]);}
      }
      return arr      
}

function anweishufenzu_2(collection)                  //返回数组中所有二位数组成的数组
{
      var arr = [];
      for(var i=0;i<Math.floor(collection.length);i++)
      {
            if(collection[i]>10 && collection[i]<100)
                  {arr.push(collection[i]);}
      }
      return arr       
}

function anweishufenzu_3(collection)                  //返回数组中所有3位数组成的数组
{
      var arr = [];
      for(var i=0;i<Math.floor(collection.length);i++)
      {
            if(collection[i]>100 && collection[i]<1000)
                  {arr.push(collection[i]);}
      }
      return arr    
}

function compute_average(collection) {                      //计算平均数函数
    var sum = eval(collection.join("+"));
    return (sum/collection.length*100)/100;
}
module.exports = even_group_calculate_average;
