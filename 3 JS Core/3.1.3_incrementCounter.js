/*Урок с кодом
В localStorage по ключу "counters" находится JSON c объектом, полями которого являются имена счётчиков, а значениями - числовое значение счётчика. Напишите функцию incrementCounter, которой на вход первым параметром передаётся counterName - имя счётчика.

Задача функции увеличить значение счётчика counterName на 1 и обновить данные в localStorage. В localStorage может находится невалидный JSON, чтение которого может привести к ошибке, в этом случае функция должна записывать новые данные, где у указанного счетчика будет значение 1. В конце функция должна возвращать значение счетчика после инкремента.*/

function incrementCounter(counterName) {
  let data = { [counterName]: 0 };
  try {
    data = { ...data, ...JSON.parse(localStorage.getItem('counters')) };
  } catch (err) {}
  data[counterName] += 1;
  localStorage.setItem('counters', JSON.stringify(data));
  return data[counterName];
}

incrementCounter('first'); // 6
incrementCounter('bannerClose'); // 1
