const arr1 = [1, 2, 3, [4, [5, 6]]];
function flatArray(arr) {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return [...acc, ...flatArray(item)]; //[4,[5,6]]
        } else {
            acc.push(item);
            return acc;
        }
    }, []);
}
console.log(flatArray(arr1));
