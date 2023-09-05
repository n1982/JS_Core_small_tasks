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
bubbleSorting(unSortArray);

//сортировка выбором
function sorBySelection(array) {}
