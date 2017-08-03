'use strict';

function spilt_to_zero(number, interval) {
      number = 10*number;
      interval = 10*interval;
    var result=[];
    switch(number%2)
    {
        case 0:
            while(number>=0)
            {
                var num  = number/10;
                result.push(num);
                number=number-interval;
            }
            break;
       case 1:
            while(number>=0)
            {
                var num  = number/10;
                result.push(num);
                number=number-interval;
            }
            result.push(number/10);
            break;
    }
    return result
  //在这里写入代码
}

module.exports = spilt_to_zero;
