// 1
/*
function foo() {
    let a = b = 0;
    a++
    return a
}

foo()
// переменная "а" находиться в области видимости функции foo()
typeof a // -> undefined

// переменная "в" находиться в глобальной области видимости и ей присвоен "0"
typeof b // -> number

console.log(b)
console.log(typeof a)
console.log(typeof b)

//2
0.4 + 0.5 === 1.9.log; // false -> особенности хранения числа в двоичном формате
(0.4 + 0.5).toFixed(18) // -> 0.900000000000000022
console.log((0.4 + 0.5).toFixed(18))

//3
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++) ; // тело цикла пустое
//сработает один раз после цикла
// i = 4
{
    numbers.push(i + 1);
}
numbers; // => [5]

//4
const clothes = ['jacket', 't-shirt'];
clothes.length = 0 //-> делает массив пустым

clothes[0] //-> undefined
*/

//5
Promise.resolve(10)
    .then(e => console.log(e)) // -> 10
    .then(e => Promise.resolve(e)) // e = undefined
    .then(console.log) // -> undefined
    .then(e => {
        if (!e) { // сработает так как e = undefined
            throw 'Error caught'; // сбросится ошибка
        }
    })
    .catch(e => { // перехват ошибки
        console.log(e); // -> Error caught
        return new Error('New error'); // вернет новый промис с кастомной ошибкой в состоянии fullfiled
    })
    .then(e => { // сработает
        console.log(e.message); // ->New error
    })
    .catch(e => { // catch не сработает, все ошибки перехвачены ранее
        console.log(e.message); // ??
    });

/*
//6 Напишите функцию сложения вида add(num1)(num2)
// add(2)(5)(3)() //
const add = (a) => {
    let sum = a;
    const func = (b) => {
        if (b) {
            sum += b;
            return func;
        } else {
            return sum;
        }
    };
    return func;
};

//7
const fib = (n, memo) => {
    memo = memo || {}; // объект для хранения уже посчитанных значений
    if (memo[n]) return memo[n]; // если значение уже посчитано возвращает результат
    if (n <= 1) return 1; // в случае если изначально задана "1"
    return memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // рекурсивно обходит все заданные значения
}



*/
