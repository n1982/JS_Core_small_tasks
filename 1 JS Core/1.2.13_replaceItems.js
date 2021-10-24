/*replaceItems
Напишите две функции replaceItemsClear(arr, item, replaceItem) и replaceItemsMutate(arr, item, replaceItem).

Функция replaceItemsClear находит все элементы массива arr, равные item, и возвращает новый массив, в котором на месте найденных значений стоит replaceItem.

Функция replaceItemsMutate реализует тот же функционал, только мутирует входящий массив и возвращает его же.*/

function replaceItemsClear(arr, item, replaceItem) {
    /*let arr2 = []
    arr.forEach(el => {
        if (el === item) {
            el = replaceItem
            arr2.push(el)
        } else arr2.push(el)
    });
    return arr2*/
    return arr.map((el)=>{
        if(el === item) return replaceItem
        return el
    })
}

function replaceItemsMutate(arr, item, replaceItem) {
    arr.forEach(function (name, index) {
        if (name === item) {
            name = replaceItem
            arr[index] = name
        }
    });
    return arr
}

console.log(replaceItemsClear([1, 2, 3, 4, 2], 2, 'a')); //  [1,'a',3,4,'a']
const arr = [1, 2, 3, 4, 2];
replaceItemsMutate(arr, 2, 'a');
console.log(arr); // [1,'a',3,4,'a']

/*
else arr2.push(el)  не стоит писать else линейно т.к это сложнее читать чем просто  + arr2 arr3 и т.д оч плохие имена + replaceItemsClear лучше на map переписать*/
//Сделал
