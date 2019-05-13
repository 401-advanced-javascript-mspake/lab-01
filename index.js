'use strict';

// const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
// console.log(greet('JOHN'));
console.log(math.add([1,3,10])); // 14
console.log(math.subtract([1,3,10])); // -12
console.log(math.multiply([5,5,10])); // 250
console.log(math.divide([10,2,5])); // 5
console.log(math.divide([10,0])); // Cannot divide by zero

