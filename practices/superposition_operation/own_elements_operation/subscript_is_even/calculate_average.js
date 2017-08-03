'use strict';
var calculate_average = function(collection){
      var j=0;
      var arr = [];
      for(var i=0;i<collection.length/2;i++)
      {
            arr.push(collection[i*2+1]);
      }
    var sum = eval(arr.join("+"));
    return (sum/arr.length*100)/100;
};
module.exports = calculate_average;
