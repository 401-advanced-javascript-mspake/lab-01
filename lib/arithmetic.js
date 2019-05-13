'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(arr) {
  let total = 0;

  for (let num of arr) {
    if (typeof num === "number") total += num;
  }
  return total;
};

arithmetic.subtract = function (arr) {
  let total = arr[0];

  for (let i in arr) {
    if(i == 0) continue;
    if (typeof arr[i] === "number") total -= arr[i];
  }
  return total;
};

arithmetic.multiply = function (arr) {
  let total = 1;
  
  for (let num of arr) {
    if (typeof num === "number") total *= num;
  }
  return total;
}

arithmetic.divide = function (arr) {
  let total = arr[0];
  for (let i in arr) {
    if(i == 0) continue;
    if( arr[i] === 0) {
      total = 'Cannot divide by zero';
      break;
    }
    if (typeof arr[i] === "number") total /= arr[i];
  }
  return total;
}