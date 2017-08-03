'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var result=[];
    var a=objectB['value'];
    for (var i=0;i<collectionA.length;i++)
    {
        for (var j=0;j<a.length;j++)
        {
            if(collectionA[i]['key']==a[j])
            {
                result.push(a[j]);
            }
        }
    }
  return result;
  
}
