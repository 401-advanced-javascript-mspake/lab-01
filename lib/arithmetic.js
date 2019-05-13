'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(arr) {
  let total = 0;

  for (let num of arr) {
    if (checkIfNumber(num)) total += num;
  }
  return total;
};

arithmetic.subtract = function (arr) {
  let total = arr[0];

  for (let i in arr) {
    if(i == 0) continue;
    if (checkIfNumber(arr[i])) total -= arr[i];
  }
  return total;
};

arithmetic.multiply = function (arr) {
  let total = 1;
  
  for (let num of arr) {
    if (checkIfNumber(num)) total *= num;
  }
  return total;
}

arithmetic.divide = function (arr) {
  let total = arr[0];
  for (let i in arr) {
    if(i == 0) continue;
    if( checkIfZero(arr[i])) {
      total = 'Cannot divide by zero';
      break;
    }
    if (checkIfNumber(arr[i])) total /= arr[i];
  }
  return total;
}

//=================================
// Helper Functions
//=================================

function checkIfNumber(val) {
  if (typeof val === 'number') return true;
  return false;
}

function checkIfZero(num) {
  if (num == 0) return true;
  return false;
}