const unSortArray = [1, 5, 66, 8, 2, 78, 54, 2, 3, 7, 9, 90];

let comparator = (first, second) => first - second;
let shuffling = (arr, i, j) => {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
};

//пузырькова сортировка
function bubbleSorting(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (comparator(array[i], array[j]) < 0) {
                shuffling(array, i, j);
            }
        }
    }
    console.log(array);
}
// bubbleSorting(unSortArray);

//сортировка выбором
function sorBySelection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] > arr[j]);
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        console.log(min);
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    console.log(arr);
}

// sorBySelection(unSortArray);

// Циклическая сортировка
function cycleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let position = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < value) {
                position++;
            }
        }
        if (position === i) {
            continue;
        }
        /*  while (value === arr[position]) {
            // Избавляемся от дубликатов
            position++;
        } */

        [arr[position], value] = [value, arr[position]]; // Меняем значения переменных

        console.log(position);

        while (position !== i) {
            // Запускаем цикл в обратную сторону
            position = i;
            console.log(position);
            for (let k = i + 1; k < arr.length; k++) {
                if (arr[k] < value) {
                    position++;
                }
            }
            while (value === arr[position]) {
                // Избавляемся от дубликатов
                position++;
            }
            [arr[position], value] = [value, arr[position]]; // Меняем значения пременных
        }
    }
    console.log(arr);
}

//cycleSort(unSortArray);
