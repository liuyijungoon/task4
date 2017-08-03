'use strict';

function hybrid_operation_to_uneven(collection) {
    var sum=0
    for (var xx of collection)
    {
        if(xx%2==1)
        {
            sum=sum+Number(xx)*3+5;
        }       
    }
    return sum;

}

module.exports = hybrid_operation_to_uneven;

