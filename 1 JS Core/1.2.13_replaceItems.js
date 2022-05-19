/*replaceItems
Напишите две функции replaceItemsClear(arr, item, replaceItem) и replaceItemsMutate(arr, item, replaceItem).

Функция replaceItemsClear находит все элементы массива arr, равные item, и возвращает новый массив, в котором на месте найденных значений стоит replaceItem.

Функция replaceItemsMutate реализует тот же функционал, только мутирует входящий массив и возвращает его же.*/

function replaceItemsClear(arr, item, replaceItem) {
  return arr.map(el => {
    if (el === item) return replaceItem;
    return el;
  });
}

function replaceItemsMutate(arr, item, replaceItem) {
  arr.forEach(function (name, index) {
    if (name === item) {
      name = replaceItem;
      arr[index] = name;
    }
  });
  return arr;
}

const arr = [1, 2, 3, 4, 2];
replaceItemsClear(arr, 2, 'a'); //  [1,'a',3,4,'a']
replaceItemsMutate(arr, 2, 'a');
