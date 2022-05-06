/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

pigIt('Hello world !');     // elloHay orldway !

O emporatay o oresmay !' to equal 'Oay emporatay oay oresmay !'
 */
function pigIt(str) {
    const punctuationMark = ["!", ",", ".", "?", '-']
    let res = str.split(" ").map((item) => {
        if (punctuationMark.includes(item)) {
            return item
        }
        return item.split("").slice(1, item.split("").length).join('') + item.split("").shift() + 'ay'
    })
    return res.join(' ')
}

/*  Лучшее решение на codewars
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
} */
console.log(pigIt('O emporatay o oresmay !'));
console.log(pigIt('Hello world !'));

