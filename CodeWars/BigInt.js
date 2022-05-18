/* We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers.The input numbers are strings and the function must return a string.

    Example
add("123", "321"); -> "444"
add("11", "99"); -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
 */


/* function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    console.log(typeof(c))
    res = c % 10 + res
    console.log(c%10);
    console.log(res);
    console.log(c)
    c = c > 9
    console.log(c)
  }
  console.log(typeof(res))
  return res
}
 */
function add(a, b) {
    let arrA = [...a]
    let arrB = [...b]
    let res = []
    let plusDec = 0
    if (arrA.length > arrB.length) {
        for (let index = 0; index < arrA.length; index++) {
            if (!arrB[index]) arrB.unshift(0)
        }
    } else{
        for (let index = 0; index < arrB.length; index++) {
            if (!arrA[index]) arrA.unshift(0)
        }
    }
    while (arrA.length > 0) {
        let sumElem = +arrA.pop() + +arrB.pop()
        if (sumElem >= 10) {
            res.unshift((sumElem - 10) + plusDec)
            plusDec = 1
        } else if (sumElem + plusDec<10){
            res.unshift(sumElem + plusDec)
            plusDec = 0
        } else{
            res.unshift((sumElem + plusDec)-10)
            plusDec = 1
        }
    }

    if(plusDec === 1) res.unshift(1)
    return res.join('')
}

// (add("1", "1"), "2");
// console.log(add("123", "456"))
// (add("888", "222"), "1110");
// (add("1372", "69"), "1441");
// (add("12", "456"), "468");
// (add("101", "100"), "201");
console.log(add('63829983432984289347293874', '90938498237058927340892374089')) //"91002328220491911630239667963"
// console.log(add("123", "456"))
// console.log(add("888", "222"))
// console.log(add("1372", "69"))
// console.log(add("12", "456"))
// console.log(add("101", "100"))
// console.log(add("1", "1"))