'use strict';
function average(collection)
{
    var sum=0
    for (var xx of collection)
    {
        sum=Number(xx)+sum
    }
    return sum/collection.length
}
function average_to_letter(collection) {
    var char_list=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var result;
    var aver=average(collection);
    result=char_list[Math.ceil(aver)-1];
    return result;
    //在这里写入代码
}

module.exports = average_to_letter;

