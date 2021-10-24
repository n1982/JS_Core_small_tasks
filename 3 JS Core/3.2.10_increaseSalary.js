/*increaseSalary
Давайте доработаем нашу функцию увеличения зарплат, но теперь будем увеличивать ЗП всем сотрудникам и добавим к ней дополнительный функционал.
Теперь будем использовать функционал async/await для решения этой задачи.

Вам нужно написать функцию, которая

Получает данные по всем работникам
Считаем среднее-арифметическое по ЗП
Тем сотрудникам, у которых ЗП меньше средней - повышаем на 20%, у кого больше - на 10%
Если запрос прошел успешно - отправлять сотруднику уведомление об увеличении ЗП тектом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
Если запрос завершился неудачей - отправлять данные ошибки администратору
По итогу отправить суммарное ЗП работников в бухгалтерию
Должна всегда возвращать resolved промис с числовым значением, сколько зарплат успешно повышено.

Все функции для получения/изменения данных асинхронны и возвращают промисы.
Вам предоставлены функции:

api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
api.notifyAdmin(error); // Принимает ошибку
api.sendBudgetToAccounting(summarySalaries); // Принимает суммарную ЗП*/


/*try {
    // Получить данные всех сотрудников

    const allUsersData = await api.getEmployees()

    //найти среднее арифметическое по зарплате
    let averageSalary = Math.round(allUsersData.map((el) => el.salary).reduce((acc, curentValue) => acc += curentValue) / allUsersData.length)
    console.log('Средняя зарплата:', averageSalary)
    // Повысить зарплату на 20% тем сотрудникам у кого з/п ниже средней и на 10% у кого выше средней (использовать тернарный оператор
    allUsersData.forEach((el) =>
        el.salary < averageSalary ?
            el.salary = Math.round(el.salary *1.2) :
            el.salary = Math.round(el.salary *1.1)
    )
    console.log('Массив пользователей после повышения зарплаты:', allUsersData)
    //установить зарплату
    for (const item of allUsersData) {
        await api.setEmployeeSalary(
            item.id,
            item.salary
        )
    }
    //    отправить уведомление о повышении зарплаты
    for (const item of allUsersData) {
        await api.notifyEmployee(
            item.id,
            `Hello, ${item.name}! Congratulations, your new salary is ${item.salary}!`
        )
    }
    //    отправить суммарную зарплату в бухгалтерию
    let totalSalaries = allUsersData.map((el) => el.salary).reduce((acc, curentValue) => acc += curentValue)
    console.log('Суммарная зарплата:',totalSalaries)
    await api.sendBudgetToAccounting(totalSalaries)
} catch (err) {
    //    отправить сообщение об ошибке администратору
    throw api.notifyAdmin(err)
}*/
async function increaseSalary() {
    let newBudget = 0;
    let successCounter = 0;
    const employees = await api.getEmployees();
    const averageSalaries = Math.floor((employees.reduce((acc, el) => acc += el.salary, 0)) / employees.length);

    try {
        //перебираем сотрудников из списка
        for (let {id, name, salary} of employees) {
            //повышенная ЗП
            let changedSalary = 0;
            const sendRequestSalary = async () => {
                try {
                    //запрос на увеличение ЗП

                    await api.setEmployeeSalary(id, changedSalary);

                    //    отправить уведомление о повышении зарплаты
                    await api.notifyEmployee(id, `Hello, ${name}! Congratulations, your new salary is ${changedSalary}!`);
                    //подсчет успешных запросов
                    successCounter++;
                    //формирование бюджета
                    newBudget += changedSalary;
                } catch (error) {
                    //сообщение администратору об ошибке
                    await api.notifyAdmin(error);
                }
            }

            //повышение ЗП
            if (salary > averageSalaries) {
                changedSalary = Math.floor(salary * 1.1);
                await sendRequestSalary();
            } else if (salary < averageSalaries) {
                changedSalary = Math.floor(salary * 1.2);
                await sendRequestSalary();
            }
        }

    } catch (error) {

        //сообщение администратору об ошибке
        await api.notifyAdmin(error);

    } finally {
        //    отправить суммарную зарплату в бухгалтерию

        await api.sendBudgetToAccounting(newBudget);
    }

    //возвращаем кол-во успешных операций увеличения ЗП

    return successCounter;
}

const api = {
    _employees: [
        { id: 1, name: 'Alex', salary: 120000 },
        { id: 2, name: 'Fred', salary: 110000 },
        { id: 3, name: 'Bob', salary: 80000 },
    ],
    getEmployees() {
        return new Promise((resolve) => {
            resolve(this._employees.slice());
        });
    },
    setEmployeeSalary(employeeId, newSalary) {
        return new Promise((resolve) => {
            const updatedEmployees = this._employees.map((employee) =>
                employee.id !== employeeId
                    ? employee
                    : {
                        ...employee,
                        salary: newSalary,
                    }
            );
            this._employees = updatedEmployees;
            resolve(this._employees.find(({ id }) => id === employeeId));
        });
    },
    notifyEmployee(employeeId, text) {
        return new Promise((resolve) => {
            resolve(true);
        });
    },
    notifyAdmin(error) {
        return new Promise((resolve) => {
            resolve();
        });
    },
    setEmployees(newEmployees) {
        return new Promise((resolve) => {
            this._employees = newEmployees;
            resolve();
        });
    },
    sendBudgetToAccounting(newBudget) {
        return new Promise((resolve) => {
            resolve();
        });
    },
};
