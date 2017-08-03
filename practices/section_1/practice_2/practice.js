function find(collection,ch)
{
    for (var i=0;i<collection.length;i++ )
    {
        if (ch===collection[i])
        {
            return true;
        }
    }
    return false;
}
function collect_same_elements(collection_a, collection_b) {
   var result=[];
    for (var xx of collection_a)
    {
        if(find(collection_b[0],xx))
        {
            result.push(xx)
        }
    }
    return result
}

module.exports = collect_same_elements;
