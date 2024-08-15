/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/

// Your code here 
function lazyAdder(firstNum) {
  return function(secondNum) {
      return function(thirdNum) {
          return firstNum + secondNum + thirdNum;
      };
  };
}
 /*
 Explaining how you would turn my solution into a one-line fat-arrow function!
 
 You'd define `lazyAdder` as an arrow function that returns an arrow function, 
 which itself returns another arrow function. Each function would capture its 
 respective argument (`firstNum), `secondNum`, 'thirdNum`), and the innermost
function would return the sum of all three arguments. 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = lazyAdder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
