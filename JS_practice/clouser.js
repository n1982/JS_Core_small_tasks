function init() {
    let name = "Mozilla"; // name - локальная переменная, созданная в init
    function displayName() { // displayName() - внутренняя функция, замыкание
        alert (name); // displayName() использует переменную, объявленную в родительской функции
    }
    displayName();
}
// init();

//каррирование
function multiply(a) {
    return function executeMultiply(b) {
        return a * b ;
    }
}
const double = multiply(2);
double(3); // => 6
double(5); // => 10
const triple = multiply(3) ;
console.log(triple(5))


// замыкание
function clouserCounter (val){
    let counter =val
   return function innerCounterSum(){
        console.log(counter)
       return  counter += 1

    }
    // innerCounterSum()
    return counter
}
let res = clouserCounter(5)
console.log(res())

let res2 = clouserCounter(7)
console.log(res2())

