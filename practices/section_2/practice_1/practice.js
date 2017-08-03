'use strict';

module.exports = function countSameElements(collection) {
 var result=[];
    var count=[];
    var key=[collection[0]];
    var counter=1;
    for (var i=1;i<collection.length;i++)
    {
        if(i==(collection.length-1))
        {
            
            counter++;
            count.push(counter);
        }
        else if(collection[i]==collection[i-1])
        {
            counter++;
        }
        else
        {
            count.push(counter);
            counter=1;            
            key.push(collection[i]);
        }
        
    }

  for (var j=0;j<count.length;j++)
   {
       var rr={}
       rr['key']=key[j];
       rr['count']=count[j];
       result.push(rr)
   }
    return result;
}
