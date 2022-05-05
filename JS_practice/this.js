var obj1 = {
    hello: function() {
        console.log('Hello world');
        return this;
    },
    obj2: {
        breed: 'dog',
        speak: function(){
            console.log('woof!');
            return this;
        }
    }
};

console.log(obj1);
console.log(obj1.hello());  // выводит 'Hello world' и возвращает obj1
console.log(obj1.obj2);
console.log(obj1.obj2.speak())

var objReg = {
    hello: function() {
        return this;
    }
};

var objArrow = {
    hello: () => this
};

console.log(objReg.hello()); // возвращает, как и ожидается, объект objReg
console.log(objArrow.hello()); // возвращает

function test1() {
      console.log('hello world');
    console.log(this);
}
test1();
// Однако если функция выполняется в строгом режиме, то в this будет записано undefined, так как в этом режиме запрещены привязки по умолчанию
function test2() {
    'use strict';
    console.log('hello world');
    console.log(this);
}
test2();