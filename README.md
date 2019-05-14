![CF](http://i.imgur.com/7v5ASc8.png) LAB  
=================================================  
  
## Project Name  
  
### Author: Student/Group Name  
  
### Links and Resources  
* [submission PR](https://github.com/401-advanced-javascript-mspake/lab-01/pull/3)  
* [travis](https://www.travis-ci.com/401-advanced-javascript-mspake/lab-01)  
  
### Modules  
  
#### `arithmetic.js`  
##### Exported Values and Methods  
  
###### `add(arr) -> number`  
Adds an array of numbers  
Returns null if any of the values are not a number  
  
###### `subtract(arr) -> number`  
Subtracts an array of numbers  
Returns null if any of the values are not a number  
  
###### `multiply(arr) -> number`  
Multiplies an array of numbers  
Returns null if any of the values are not a number  
  
###### `divide(arr) -> number`  
Divides an array of numbers  
Does not allow dividing by zero  
Returns null if any of the values are not a number  
  
#### `greet.js`  
##### Exported Values and Methods  
  
##### -> string
Greet takes in a single parameter that is a string and returns a string  
Returns null if value is not a string  
  
#### Running the app  
* `npm install`    
* `node index.js`  
  
#### Tests  
* `npm install` (if you haven't yet)
* `npm test`
* What assertions were made?
  * Arithmetic: passing an array of numbers to any of the methods results in sucessful execution (provided a 0 is not passed to divide).  
  * Greeting: passing in a string results in successful excecution.  
  * Both: passing in an incorrect data type returns in a null.  