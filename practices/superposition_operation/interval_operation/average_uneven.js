'use strict';

function average_uneven(collection) {
    var count=0;
    var sum=0;
    for(var xx of collection)
    {
        if (xx%2==1)
        {
            sum=sum+Number(xx);
            count++
        }
    }
    return sum/count;

  //在这里写入代码
}

module.exports = average_uneven;
