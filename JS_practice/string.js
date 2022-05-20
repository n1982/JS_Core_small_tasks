// todo Уникальность всех символов в строке
/*
Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

**Input**: String

**Output**: Boolean */

/*
function isUnique(string) {
    if (new Set(string).size === string.length) return true
    return false

}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false*/

// todo Удаление всех повторяющихся значений в строке

/*Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.

**Input**: String

**Output**: String*/

/*function removeDupes(str) {
    return ([...new Set(str)].join(''))
}


console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'*/

//todo Какая строка встречается чаще всего
/*Напишите функцию, которая принимает массив строк и возвращает самую часто встречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.

**Input**: String[]

**Output**: String*/
function highestFrequency(array) {
  let objMap = {};
  let res = '';
  let currentVal = 0;
  for (let i = 0; i < array.length; i++) {
    if (objMap[array[i]]) {
      objMap[array[i]] += 1;
    } else {
      objMap[array[i]] = 1;
    }
  }
  for (const [key, value] of Object.entries(objMap)) {
    if (currentVal < value) {
      currentVal = value;
      res = key;
    }
  }
  return res;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc', 'def'])); // -> abc
console.log(highestFrequency(['abc', 'def'])); // -> abc
console.log(
  highestFrequency([
    'abc',
    'abc',
    'def',
    'def',
    'def',
    'ghi',
    'ghi',
    'ghi',
    'ghi',
  ]),
); // -> ghi
