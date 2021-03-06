/*    Напишите скрипт, который будет выводить сообщение “Hello World” с такой же структурой задержек, как и в задаче #3, но на этот раз группами по 5 сообщений, а в группах будет основной интервал задержки. Для первой группы из 5 сообщений выбираем исходную задержку в 100 мс, для следующей – 200 мс, для третьей – 300 мс и так далее.

    Вот как должен работать этот скрипт:

    На отметке 100 мс скрипт впервые выводит “Hello World”, и делает так 5 раз с интервалом, нарастающим по 100 мс. Первое сообщение появится через 100 мс, второе через 200 мс и т.д.
    После первых 5 сообщений скрипт должен увеличивать основную задержку уже на 200 мс. Таким образом, 6-е сообщение будет выведено через 500 мс + 200 мс (700 мс), 7-е — 900 мс, 8-е сообщение – через 1100 мс, и так далее.
    После 10 сообщений скрипт должен увеличивать основной интервал задержки на 300 мс. 11-е сообщение должно быть выведено через 500 мс + 1000 мс + 300 мс (18000 мс). 12-е сообщение должно быть выведено через 2100 мс, и т.д.

    По такому принципу программа должна работать неограниченно долго.

    Включите задержку в выводимое сообщение. У вас должен получиться примерно такой вывод (без комментариев):

Hello World. 100 // При 100 мс
Hello World. 100 // При 200 мс
Hello World. 100 // При 300 мс
Hello World. 100 // При 400 мс
Hello World. 100 // При 500 мс
Hello World. 200 // При 700 мс
Hello World. 200 // При 900 мс
Hello World. 200 // При 1100 мс
...

Ограничения: Можно использовать лишь вызовы setInterval (а не setTimeout) и только ОДНУ инструкцию if.

Решение

Поскольку мы можем работать только с вызовами setInterval, здесь нам потребуется использовать рекурсию, а также увеличивать задержку следующего вызова setInterval. Кроме того, инструкция if понадобится нам, чтобы это стало происходить лишь после 5 вызовов этой рекурсивной функции.

    Вот возможное решение:*/

let lastIntervalId,
  counter = 5;
const greeting = delay => {
  if (counter === 5) {
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log('Hello World. ', delay);
      greeting(delay + 100);
    }, delay);
    counter = 0;
  }
  counter += 1;
};
greeting(100);
