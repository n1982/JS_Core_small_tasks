console.log(!!(true + false)); //true
console.log(!!(12 / '6')); // true
console.log(!!('number' + 15 + 3)); //true
console.log(!!(15 + 3 + 'number')); //true
console.log(!!([1] > null)); //false
console.log(!!('foo' + +'bar')); //true
console.log(!!('true' == true)); // true
console.log(!!(false == 'false')); //false
console.log(!!(null == '')); // true
console.log(!!'false' == !!'true'); //true
console.log(`[‘x’] == ‘x’`); //false
console.log(!!([] + null + 1)); //false
console.log(typeof ([] + null + 1)); //NAN
console.log(!!(0 || ('0' && {}))); //true
console.log(!!([1, 2, 3] == [1, 2, 3])); //false
console.log(!!({} + [] + {} + [1])); //true
console.log({} + [] + {} + [1]);
console.log(!!(!+[] + [] + ![])); //true
console.log(!+[]);
console.log(!!NaN);
console.log(new Date(0) - 0); //true
console.log(new Date(0) + 0); //true
