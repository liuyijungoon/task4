'use strict';
function is_or_not_in_list(x,list)
{
    for (var i=0;i< list.value.length;i++)
    {
        if (x==list.value[i])
        {
            return true;
        }
    }
}
module.exports = function createUpdatedCollection(collectionA, objectB) {
 for (var xx  of  collectionA)
{
  if (is_or_not_in_list(xx.key,objectB))
  {
      xx.count--
  } 
}
 return collectionA;
}
