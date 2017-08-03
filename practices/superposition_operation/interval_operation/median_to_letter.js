'use strict';

function median_to_letter(collection) {
    var med;
    var ch;
    var char_list=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    med=Math.ceil((collection[0]+collection[collection.length-1])/2)
    ch=char_list[parseInt(med/26)-1]+char_list[med%26-1];
    
    return ch;

  //在这里写入代码
}

module.exports = median_to_letter;
