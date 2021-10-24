/*csvGenerator
Нужно написать функцию, которая переводит двумерный массив (массив массивов) в CSV формат и возвращать строку О формате: https://ru.wikipedia.org/wiki/CSV (детали в разделе "Спецификация")

Допустимые значения в качестве элементов массива - числа и строки Если встречается функция - выбрасывать ошибку с текстом "Unexpected value"

Функция принимает: data - массив массивов, содержашие числа или строки

Функция возвращает: Строку в формате CSV*/

function arrayToCsv(data = []) {

    return data
        .map(array => array.map(e => {
            let type = typeof e;
            if (type !== "number" && type !== "string")
                throw new Error("Unexpected value");
            return (type === "string" && e.length>1) ?
                JSON.stringify(e).replace(/\\/g, "\"") :
                e
        }).join(","))
        .join("\n");
}

console.log(arrayToCsv([[1, 2], ['a', 'b'],])) // '1,2\na,b'
console.log(arrayToCsv([[1, 2], ['a,b', 'c,d']])) // '1,2\n"a,b","c,d"'
console.log(arrayToCsv([['"text"', 'other "long" text']]))    // ==> """text""","other ""long"" text"