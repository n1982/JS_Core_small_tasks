/*В данном задании вам нужно будет реализовать полифл Object.create.

Реализуйте аналог стандартной фунции Object.create - создаёт и возвращает новый объект, прототипом которого является первый аргумент, переданный в функцию. Если передан второй аргумент - устанавливает его в качестве свойств для нового объекта. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

Ваша функция должна принимать два параметра:

prototype (обязательный) - объект или null (но не undefined), который будет являтся прототипом для созданного объекта.
properties (optional) - аргумент, который установит свойства для нового объекта (будет передан в Object.defineProperties).
Если параметры фунции отсутствуют или prototype НЕ является объектом или null, то необходимо пробросить TypeError.

В результате Object.create вернет созданный объект с внутренним свойством [[Prototype]], установленным в значение переданного в аргументе prototype. Если properties передан и НЕ является undefined, то будет вызван Object.defineProperties(obj, properties), где obj - объект,который должен быть возвращен из Object.create.

Подсказки:

Для доступа к внутреннему свойству объекта [[Prototype]] используйте методы Object.getPrototypeOf/Object.setPrototypeOf.
В JavaScript все является объектом, кроме: null и undefined.
NaN, Infinity, /regular expression literals/, function(){} - это всё тоже объекты.*/

Object.create = function (proto, propertiesObject) {
  if (arguments.length === 0) throw new TypeError();
  if (typeof proto !== 'object' || proto === null) {
    throw new Error();
  }
  let result = {};
  if (propertiesObject === null) return result;
  if (proto != null) result.__proto__ = proto;
  if (typeof propertiesObject !== 'undefined')
    Object.defineProperties(result, propertiesObject);
  return result;
};

const A = {
  objectName: 'Object A',
  getObjectName: function () {
    return `This is ${this.objectName}!`;
  },
};

// const A = null;
const B = Object.create(A, {
  objectName: {
    value: 'Object B',
  },
});
// const B = null

A.getObjectName(); // This is Object A!
B.getObjectName(); // This is Object B!

A.hasOwnProperty('getObjectName'); // true
A.hasOwnProperty('objectName'); // true

B.hasOwnProperty('getObjectName'); // false
B.hasOwnProperty('objectName'); // true
console.log(B.hasOwnProperty('getObjectName'));
console.log(new Object());
