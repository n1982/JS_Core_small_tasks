/*Урок с кодом
Личный Счет
Создайте 2 класса - Person для описания клиента и Account для работы с банковским счетом частного лица.
Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.

Person
const person = new Person('Johannes', 'Helms', '1983-01-02');
Методы
getAge() - Возвращает возраст владельца счета
Свойства
firstName - Имя
lastName - Фамилия
fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)
Account
new Account(person, 1000);
Методы
addMoney(amount, description) - Положить деньги на аккаунт с комментарием к переводу
withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием к переводу
getAmount() - Получить текущее состояние счета
getAccountHistory() - Возвращает массив с объектами формата { timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }. Поле target может иметь значения in или out.
transfer(fromAccount, toAccount, amount) - статический метод, переводит деньги с одного счета на другой
Свойства
person - Владелец счета

Disclamer
Конечно, математику с плавающей точкой для обработки балансов использовать не стоит - будут накапливаться ошибки вычисления. Но в данном упражнении этим можно пренебречь.*/
class Person {
    constructor(firstName, lastName, birthDay) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthDay = birthDay
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getAge() {
        let age
        let now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const dateOfBirthDay = new Date(this.birthDay.split('-'));
        const dateOfBirthDayThisEyar = new Date(today.getFullYear(), dateOfBirthDay.getMonth(), dateOfBirthDay.getDate())
        age = today.getFullYear() - dateOfBirthDay.getFullYear()
        if (today < dateOfBirthDayThisEyar) {
            age = age - 1;
        }
        return age

    }
}

class Account extends Person {

    constructor(person, amount) {
        super(person.firstName, person.lastName, person.birthDay)
        this.amount = amount;
        this.history = [];
    }

    static transfer(fromAccount, toAccount, amount) {
        let descriptionOut = `Перевод на счет ${toAccount.fullName}`
        let descriptionIn = `Поступление со счета ${fromAccount.fullName}`
        fromAccount.amount -= amount;
        toAccount.amount += amount
        fromAccount.history.push({timestamp: Date.now(), target: "out", amount, descriptionOut});
        toAccount.history.push({timestamp: Date.now(), target: "in", amount, descriptionIn});


    }

    addMoney(amount, description) {
        this.amount = this.amount + amount
        this.history.push({timestamp: Date.now(), target: "in", amount, description});
        console.log(description)
    }

    getAmount() {
        return this.amount
    }

    withdrawMoney(amount, description) {
        this.amount = this.amount - amount;
        this.history.push({timestamp: Date.now(), target: "out", amount, description});
        console.log(description);

    }

    getAccountHistory() {
        return this.history;
    }
}


//Пример
const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);
console.log(alex)
console.log(helen)
console.log(alexAccount)
console.log(helenAccount)
alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
console.log(amount)
console.log(alexAccount.withdrawMoney(amount * 0.1, 'Налоги'));
Account.transfer(alexAccount, helenAccount, 100);
console.log(helenAccount.getAmount()); // 500
console.log(alexAccount.getAmount()); // 1700
console.log("после всех вызовов ", alexAccount)
console.log(alexAccount.getAccountHistory())