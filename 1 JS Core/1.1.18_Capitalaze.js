/*Урок с кодом
Capitalize
Реализуйте функцию capitalize, которая принимает строку в качестве аргумента и возвращает новую строку, 
в которой первые буквы слов заглавные, а все остальные - строчные.*/

function capitalize(str) {
    let arr = str.toLowerCase().split(' ')

    return arr.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')

}

const str = 'sOme RanDoM sTRING';
console.log(capitalize(str)); // Some Random String

// Попробуй буз if и через slice и map
// Сделал