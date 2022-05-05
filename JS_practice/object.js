/*
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.*/

// ------------- Решение ---------------

/*let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(obj) {
    let result = 0
    for (value of Object.values(obj)) {
        result += value
    }
    return result
}

console.log(sumSalaries(salaries))*/

// №2 Подсчёт количества свойств объекта

//Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
    name: 'John',
    age: 30
};

function objKeyCount(object) {
    return Object.keys(object).length
}

console.log(objKeyCount(user))