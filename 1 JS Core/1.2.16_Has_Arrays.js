/*Has Arrays
Реализуйте функцию hasArrays, которая принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.*/
const hasArrays = (arr) => {
    return arr.some((el) => Array.isArray(el))
};

const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
console.log(hasArrays(data1));
// true

const data2 = [];
console.log(hasArrays(data2));
// false


