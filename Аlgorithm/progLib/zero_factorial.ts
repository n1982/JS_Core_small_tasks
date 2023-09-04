/* 
Нули факториала

Найти, на сколько нулей оканчивается n! = 1 · 2 · 3 · … · n. n ≤ 1000.

Sample Input 1:

25
Sample Output 1:

6
Sample Input 2:

1
Sample Output 2:

0
Напишите программу.  */

const zeroFactorial = (num: number): number => {
  let nulls = 0;
  while (num > 0) {
    num = Math.floor(num / 5);
    nulls += num;
  }
  return nulls;
};

zeroFactorial(10);
