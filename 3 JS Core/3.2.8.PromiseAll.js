/*PromiseAll
Напишите асинхронную функцию, которая принимает массив промисов и возвращает массив результатов вызова этих промисов.*/
function promiseAll(promises) {
  if (promises.length === 0) return Promise.resolve([]);
  const copyPromises = [...promises];
  return new Promise((resolve, reject) => {
    let count = 0;
    for (let i = 0; i < copyPromises.length; i++) {
      copyPromises[i]
        .then(value => {
          copyPromises[i] = value;
          count++;
          if (count === copyPromises.length) resolve(copyPromises);
        })
        .catch(err => reject(err));
    }
  });
}

const firstPromise = new Promise(resolve =>
  setTimeout(() => resolve(300), 300),
);

const secondPromise = new Promise(resolve =>
  setTimeout(() => resolve(200), 200),
);

const thirdPromise = new Promise(resolve =>
  setTimeout(() => resolve(100), 100),
);

promiseAll([firstPromise, secondPromise, thirdPromise]).then(console.log); // [300, 200, 100]
