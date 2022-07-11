/*Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.*/

function removeZeros(array) {
  let end = array.length - 1;
  let tmp;
  for (let i = 0; i < end; i++) {
    console.log(' i=', i);
    if (array[i] === 0 || array[i] === '0') {
      tmp = array[i];
      console.log('tmp = ', tmp);
      for (let j = i--; j < array.length - 1; j++) {
        array[j] = array[j + 1];
      }
      array[array.length - 1] = tmp;
      end -= 1;
    }
  }
  return array;
}

let input = [1, null, '5', '0', '2', 0, 8, 6, null, false];
//[1,null,"5","2",8,6,null,false,"0",0]

console.log(removeZeros(input));
