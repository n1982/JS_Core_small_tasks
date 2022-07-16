/*
 *A faro shuffle of a deck of playing cards is a shuffle in which the deck is split exactly in half and then the cards in the two halves are perfectly interwoven, such that the original bottom card is still on the bottom and the original top card is still on top.

For example, faro shuffling the list

['ace', 'two', 'three', 'four', 'five', 'six']
gives

['ace', 'four', 'two', 'five', 'three', 'six' ]
If 8 perfect faro shuffles are performed on a deck of 52 playing cards, the deck is restored to its original order.

Write a function that takes an integer n and returns an integer representing the number of faro shuffles it takes to restore a deck of n cards to its original order.

Assume n is an even number between 2 and 2000. */
function faroCount(deckSize) {
  const dec = [...Array(deckSize)].map((_, index) => index);
  let count = 0;
  let decAftershufle = [];
  let firstHalf = dec.slice(0, dec.length / 2);
  let secondHalf = dec.slice(dec.length / 2, dec.length);
  let equal = false;
  while (!equal) {
    for (let i = 0; i < dec.length / 2; i++) {
      if (firstHalf[i] !== undefined) decAftershufle.push(firstHalf[i]);
      decAftershufle.push(secondHalf[i]);
    }
    equal =
      dec.length === decAftershufle.length &&
      dec.every((element, index) => element === decAftershufle[index]);
    count++;
    firstHalf = decAftershufle.slice(0, decAftershufle.length / 2);
    secondHalf = decAftershufle.slice(
      decAftershufle.length / 2,
      decAftershufle.length,
    );
    decAftershufle = [];
  }
  return count;
}

// faroCount(52); //8
// faroCount(64); //6
// faroCount(2); //1
// faroCount(30); //28

// best practices
/*
function faroCount(deckSize) {
  let pos = 2,
    step = 0;
  do {
    pos *= 2;
    console.log('pos = ', pos);
    pos -= pos > deckSize ? deckSize : 1;
    step++;
  } while (pos != 2);
  return step;
}
*/
