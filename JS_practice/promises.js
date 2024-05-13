Promise.resolve()
  .then(() => console.log(1)) // "Первый"
  .then(() => {
    console.log(2);
    throw new Error();
  }) // "Третий"
  .catch(() => console.log(3)) // "Пятый"
  .then(() => console.log(4)); // "Седьмой"

Promise.resolve()
  .then(() => console.log(2 - 1)) // "Второй"
  .then(() => {
    console.log(2 - 2);
    throw new Error();
  }) // "Четвертый"
  .catch(() => console.log(2 - 3)) // "Шестой"
  .then(() => console.log(2 - 4)); // "Восьмой"
