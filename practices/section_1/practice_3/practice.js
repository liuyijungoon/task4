'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var list= objectB['value'];
    var result=[];
    for (var i=0;i<collectionA.length;i++)
    {
        for (var j=0;j<list.length;j++)
        {
            if(collectionA[i]==list[j])
            {
                result.push(list[j]);
            }
        }
    }
  return result;
  return '实现练习要求，并改写该行代码。';
}
