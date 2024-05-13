const array1 = [1, 5, 2, 4, 2, 6, 4, 5, 3, 6, 1]; //

function uniq(arr) {
    return arr
        .filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
        .join(', ');
}

console.log(uniq(array1));
