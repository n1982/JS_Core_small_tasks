/* 
Написать функцию которая принимает число
и может вызываться бесконечно много раз
пока не будет вызвана без аргументов
тогда возвращает сумму чисел */

function add(num) {
    let sum = 0;
    if (arguments.length === 0) return sum;
    sum += num;
    return function func(num) {
        if (num) {
            sum += num;
            return func;
        }
        return sum;
    };
}
console.log('fhfh');
console.log(add(9)(10)()); //19
console.log(add(9)()); //9
console.log(add()); //0
