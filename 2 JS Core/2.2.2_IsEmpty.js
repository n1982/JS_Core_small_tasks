/*IsEmpty
Напишите функцию isEmpty, которая возвращает true, если у объекта нет свойств(у самого объекта, не у прототипов), иначе возвращает false.*/

/*Напишите функцию isEmptyWithProtos, которая возвращает true, если у объекта и его прототипов(не включая Object.prototype) нет свойств, иначе возвращает false.*/

function isEmpty(obj) {
    let keys = Object.keys(obj).length;
    return keys === 0;
}

function isEmptyWithProtos(obj) {
    let keys = Object.keys(obj).length;
    const proto = Object.getPrototypeOf(obj);
    if (!proto) {
        return true;
    }
    const keys_proto = Object.keys(proto).length;
    keys += keys_proto;
    return keys === 0;
}

const obj = Object.create(null);
isEmpty(obj); // -> true
isEmpty({ prop: 'value' }); // -> false

const protoObj = Object.create(null);
const obj = Object.create(protoObj);
isEmptyWithProtos(obj); // -> true
isEmptyWithProtos({}); // -> false