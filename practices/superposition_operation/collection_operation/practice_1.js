'use strict';

function hybrid_operation(collection) {
    var sum=0;
    for (var xx of collection)
    {
        sum =Number(xx)*3+2+sum
    }
    return sum;

  //在这里写入代码
}

module.exports = hybrid_operation;

