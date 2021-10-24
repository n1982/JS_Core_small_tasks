/*Реализуйте функцию calculatePrice, которая принимает массив заказов, а возвращает сумму их стоимостей. Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.

Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0.*/

// Данные на входе:
const data = [
    {
        type: 'food',
        price: 130,
    },
    {
        type: 'clothes',
        price: 7300,
    },
    {
        type: 'other',
        price: 1400,
    },
];

const calculatePrice = (orders = []) => {

    return orders.reduce((acc, oredrs) =>{return acc += oredrs.price},0)

};

console.log(calculatePrice(data))

//Тут if/else не нужен. Тебу нужно в качестве аргумента написать orders = [] и просто сделать reduce по orders