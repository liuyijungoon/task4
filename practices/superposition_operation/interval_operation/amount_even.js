'use strict';

function amount_even(collection) {
    var sum=0;
    for (var xx of collection)
    {
        if (xx%2==0)
        {
            sum=Number(xx)+sum;
        }
    }
    return sum;
  //在这里写入代码
}

module.exports = amount_even;
