/*Транслятор событий
Cоздайте класс EventEmitter для управления событиями. У этого класса должны быть следующие методы:
.on(event, callback) - добавить обработчик события

.off(event, callback) - удалить обработчик события

.once(event, callback) - добавить обработчик события, который сработает единожды

.emit(event, [...arg]) - вызвать все обработчики события event, можно передать аргументы

Расширьте EventEmitter классом BroadcastEventEmitter так, чтобы была возможность вызвать все обработчики всех событий:
emit("*", [...arg]) - вызвать все обработчики событий, можно передать аргументы
Event Emitter можно перевести как “транслятор” событий.

Представьте себе такую ситуацию: происходит какое-то событие, например пользователь кликнул на кнопку, на которое должны отреагировать разные участки программы. Чтобы проще организовать такую логику, используют шаблон Event Emitter, который можно реализовать разными способами. Основная идея в том, чтобы грамотно создать основу для управления событиями и реализовать возможность любым элементам “подписаться” на него (и быть в курсе происходящего).*/
class EventEmitter {
  constructor() {
    // Создаем пустой объект для храннеия событий
    // ключ - название события
    // значение - функция обрабатывающая событие
    this.events = {};
  }

  on(eventName, callback) {
    // Принимаем название события и функцию её обрабатывающую и записываем в объект events
    const event = this.events[eventName];
    if (event)
      event.push(
        callback,
      ); // если такое событие уже зарегистрированно то добавляем в массив функций-обработчиков еще одну { name: [callback 1, callback 2, ...]
    else this.events[eventName] = [callback]; // если нет такого события создаем новую запись в объекте events с присвоением массива из callback ...
  }

  off(eventName, callback) {
    const event = this.events[eventName];
    if (!event) return; //нет такого события ничего не делаем
    const i = event.indexOf(callback); // находим индекс обработчика в массиве обработчиков
    if (i !== -1) event.splice(i, 1); // удаляем обработчик если такой есть
  }

  once(eventName, callback) {
    this.on(eventName, callback);
    callback();
    this.off(eventName, callback);
  }

  emit(eventName, args) {
    const event = this.events[eventName];
    if (event)
      event.forEach(fn => {
        fn(args);
      });
    // если событие есть то запускаются коллбэки привязанные к этому событию
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, ...args) {
    for (let event in this.events) {
      this.events[event].forEach(fn => {
        fn(...args);
      });
    }
  }
}

let input = document.querySelector('input');
let button = document.querySelector('button');
let h1 = document.querySelector('h1');

let emitter = new EventEmitter();

emitter.on('event:name-changed', data => {
  h1.innerHTML = `New value is: ${data.name}`;
});
/*
подписываемся на событие 'event:name-changed' и передаём обработчик вторым аргументом. Теперь при возникновении этого события, мы будем вызывать обработчик и обновим текст заголовка при возникновении этого события.
*/

button.addEventListener('click', () => {
  emitter.emit('event:name-changed', { name: input.value });
});
/*
добавляем обработчик события 'клик' на кнопку. Этот обработчик производит событие 'event:name-changed' и вызывает все функции, подписанные на это события, передавая им строку из input.
*/
