'use strict';

function hybrid_operation_to_uneven(collection) {
    var result=[];
    for (var xx of collection)
    {
        if(xx%2==1)
        {
            result.push(xx*3+2)
        }       
    }
    return result;

}

module.exports = hybrid_operation_to_uneven;

