'use strict';

function calculate_elements_sum(collection) {
  var sum = eval(collection.join("+"));
  return sum
}

module.exports = calculate_elements_sum;

