function addCharObj(str: string) {
    let charObj: { [key: string]: number } = {};
    for (let key of str.toLowerCase()) {
        charObj[key] = charObj[key] + 1 || 1;
    }
    console.log(charObj);
    return charObj;
}

function anagram(word1: string, word2: string) {
    let word1Char = addCharObj(word1);
    let word2Char = addCharObj(word2);

    if (Object.keys(word1Char).length !== Object.keys(word2Char).length) {
        return false;
    }

    for (let key in word1Char) {
        if (word1Char[key] !== word2Char[key]) return false;
    }
    return true;
}

console.log(anagram('finder', 'Friend'));
console.log(anagram('milk', 'Friend'));
