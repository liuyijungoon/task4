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
module.exports = function createUpdatedCollection(collection, objectB) {
  
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
for (var xx  of result)
{
    if (is_or_not_in_list(xx.key,objectB))
    {
        xx.count-=(parseInt(xx.count/3))
    }
}
return result;
}
