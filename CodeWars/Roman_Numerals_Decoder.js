/*Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form 
of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and 
skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
M-1000
C-100
L-50
X-10
V-5
I-1
*/

function decoder(roman) {
    let res = 0;
    let romanNumerals = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };

    for (let i = 0; i < roman.length; i++) {
        if (
            !romanNumerals[roman[i + 1]] ||
            romanNumerals[roman[i]] >= romanNumerals[roman[i + 1]]
        ) {
            res += romanNumerals[roman[i]];
        } else {
            res -= romanNumerals[roman[i]];
        }
    }
    return res;
}
console.log(decoder('MCMXC')); //1990 //1000, -100, 1000, -10, 100
