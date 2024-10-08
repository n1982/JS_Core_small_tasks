/*
* Throttle
Реализуйте функции throttle.

Примечание: из-за особенностей тестирования реализация new Date() изменена так, что изначальная текущая дата (new Date() или Date.now()) будет равна нулю и будут вручную увеличиваться в тестах. Учтите это, если будете использовать дату в реализации функций.

Примечание: функции, полученные из throttle, должны передавать полученные аргументы и контекст вызова в оригинальную функцию

Примечание: функция throttle может быть реализована без использования таймеров

Функция должна принимать функцию и время задержки, а возвращать модифицированную функцию. В
озвращенная функция должна следовать следующим правилам:

Функция throttle должна вызывать функцию и запускать таймер, равный времени задержки, 
в течение которого функция не может быть вызвана заново. 
Throttle необходим для того, чтобы обеспечить возможность вызова функции не чаще, чем указанное время задержки. 
Если время задержки равно 500 мс, то при вызове функции, возвращенной из throttle, 
каждые 100 мс 10 раз подряд функция будет вызвана лишь три раза:
первый вызов функции на 0мс (первая попытка вызова функции после 0 мс задержки),
второй на 500 мс (пятая попытка вызова функции после 500 мс задержки)
и третий на 1000 мс (десятая попытка вызова функции после 1000 мс задержки).*/

const throttle = (fn, throttleTime) => {
    const start = Date.now();
    let cashedResult = fn.apply();
    return function () {
        let end = Date.now();
        console.log(end - start);
        if (end - start >= throttleTime)
            cashedResult = fn.apply(this, arguments);
        return cashedResult;
    };
};

function fn() {
    console.log('call function');
}

const throttledFn = throttle(fn, 500); // функция может быть вызвана не чаще, чем раз в 500 мс

const intervalId = setInterval(throttledFn, 500);
console.log(intervalId);
setTimeout(() => clearInterval(intervalId), 1600); // удаляем интервал через 10 вызовов
