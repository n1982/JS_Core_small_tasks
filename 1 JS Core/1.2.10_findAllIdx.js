/*findAllIdx
Напишите функцию findAllIdx(arr, value), которая возвращает массив индексов элементов, у которые значение равно value.*/

function findAllIdx(arr, value) {

    return arr.map((el, index) => {
        if (el === value) return index
    }).filter((index) => index !== undefined)


}

console.log(findAllIdx([1, 0, 1, 0, 0, 1], 0) )// [1,3,4]
console.log(findAllIdx([5, 2, 3, '5', 2, 5, 4], '5')) // []


/*Код написан императивно, лучше декларативно написать через map/filter и без доп массива const arrOut=[] т.к map вернет массив*/
//Сделал