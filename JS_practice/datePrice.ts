/* 
 расчет стоимости проживания
функция принимает 2 аргумента
- количество ночей проживания
- дату заезда (не обязательно) - если аргумент не задан то отсчет идет от текущего дня

будний день - 1500
выходной день - 2200

*/

function costOfLiving(quantityDays: number, startDate = new Date()) {
    let totalCost = 0;
    let nextDay = 1000 * 60 * 60 * 24;
    for (let i = 1; i <= quantityDays; i++) {
        new Date(Date.parse(startDate) + i * nextDay).getDay() < 2
            ? (totalCost += 2200)
            : (totalCost += 1500);
    }
    return totalCost;
}

console.log(costOfLiving(7));
console.log(costOfLiving(5, new Date('10-11-2024')));
