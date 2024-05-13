/*
Capitalize
Реализуйте функцию capitalize, которая принимает строку в качестве аргумента и возвращает новую строку, 
в которой первые буквы слов заглавные, а все остальные - строчные.*/

function capitalize(str: string): string {
    let arr = str.toLowerCase().split(' ');
    console.log(arr);
    return arr
        .map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
}

const string = 'sOme RanDoM sTRING';
console.log(capitalize(string));
