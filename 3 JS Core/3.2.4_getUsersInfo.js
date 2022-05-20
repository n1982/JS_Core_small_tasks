/*getUsersInfo
Вам нужно написать функцию, которая получает массив всех пользователей и передает его в функцию коллбэк.
Пример использования

getUsersInfo((users) => {
  console.log(users); // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]
});
Для получения данных вам предоставлены 2 асинхронные функции

getUsersIds - Возвращает массив с идентификаторами пользователей
getUserInfo - Возвращает данные пользователя по заданному идентификатору
getUsersIds((ids) => {
  console.log(ids); // ['id2', 'id6']
});

getUserInfo('someUserId', (userInfo) => {
  console.log(userInfo); // { name: 'Alex', age: 70 }
});
Функция должна вызвать callback, переданный первым агрументом и передать туда массив данных о пользователях.

Порядок пользователей в результирующем массиве должен соответствовать порядку идентификаторов в массиве из getUsersIds

Hint: Вне платформы вы можете создать эти функции с помощью setTimeout и какого-то общего хранилица данных.*/

const data = {
  id1: { name: 'Alice', age: 62 },
  id2: { name: 'Bob', age: 28 },
  id3: { name: 'Charlie', age: 10 },
};
function getUsersIds(cb) {
  setTimeout(() => cb(Object.keys(data)), 100);
}
function getUserInfo(id, cb) {
  setTimeout(() => cb(data[id]), 10 * data[id].age);
}

function getUsersInfo(onLoad) {
  // Начнём с получения идентификаторов
  getUsersIds(ids => {
    // Пустой массив, если пользователей нет
    if (ids.length === 0) return onLoad([]);

    // Подготовим массив необходимой длины
    const users = [];
    users.length = ids.length;
    // Счётчик коллбеков, нужен чтобы среагировать на последний
    let c = ids.length;

    // Перебираем идентификаторы, запускаем «асинхронные» функции

    for (let i = 0; i < ids.length; ++i) {
      const id = ids[i];

      getUserInfo(id, user => {
        // Кладём полученного пользователя в нужное место в массиве
        users[i] = user;
        // Когда счётчик дошёл до нуля, вызываем onLoad
        if (!--c) onLoad(users);
      });
    }
  });
}

getUsersInfo(users => console.log(JSON.stringify(users)));
