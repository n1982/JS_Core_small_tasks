/*Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s.
So 1990 is rendered
"MCMXC" (1000 = M, 900 = CM, 90 = XC) and
2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for
1666, "MDCLXVI", uses each letter in descending order.*/

/*
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

function solution(roman) {
    const subMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let arrArabic = roman.split('').map((item) => subMap[item])
    let res = 0
    for (let i = 0; i < arrArabic.length; i++) {
        let curent = arrArabic[i]
        let next = arrArabic[i + 1] || 0
        if (curent >= next) {
            res += curent
        } else {
            res = res + (next - curent)
            i = i + 1
        }

    }
    console.log(res)
    return res;
}
// Второй вариант решения
/*
function solution(roman){
   var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

   return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
}*/

solution('XXI');