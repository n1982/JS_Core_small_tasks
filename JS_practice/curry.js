function curry(func) {
    console.log(func.length);
    return function curried(...args) {
        console.log('func in curried', func.length);
        console.log('args in curried', args.length);
        console.log(args.length >= func.length);
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                console.log(args);
                console.log(args2);
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

//console.log(curriedSum(1, 2, 3)); // 6, всё ещё можно вызывать нормально

//console.log(curriedSum(1)(2, 3)); // 6, каррирование первого аргумента
console.log(curriedSum(1)(2)(3)); // 6, каррирование всех аргументов
