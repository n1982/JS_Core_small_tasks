/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

/* Решение codewars
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }
*/

function zero(cb) {
    if(arguments.length == 0) return 0
    return cb(0)
 }
function one(cb) {
    if (arguments.length == 0) return 1
    return cb(1)
 }
function two(cb) {
    if (arguments.length == 0) return 2
    return cb(2)
 }
function three(cb) {
    if (arguments.length == 0) return 3
    return cb(3)
 }
function four(cb) {
    if (arguments.length == 0) return 4
    return cb(4)
 }
function five(cb) {
    if (arguments.length === 0) return 5
    return cb(5)
 }
function six(cb) {
    if (arguments.length == 0) return 6
    return cb(6)
 }
function seven(cb) {
    if (arguments.length == 0) return 7
    return cb(7)
 }
function eight(cb) { 
    if (arguments.length == 0) return 8
    return cb(8)
}
function nine(cb) { 
    if (arguments.length == 0) return 9
    return cb(9)
}

function plus(firstNumber) {
    return (secondNumber) => secondNumber + firstNumber
 }
function minus(firstNumber) { 
    return (secondNumber) => secondNumber - firstNumber
}
function times(firstNumber) {
    return (secondNumber) => secondNumber * firstNumber

 }
function dividedBy(firstNumber) { 
    if (firstNumber === 0 ) return 0
    return (secondNumber) => Math.floor(secondNumber / firstNumber)
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3