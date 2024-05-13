function fetchUser() {
    fetch('https://jsonplaceholder.typicode.com/u1sers')
        .then(res => {
            console.log(res);
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            } else 'Ошибка запроса';
        })
        .then(res => console.log('2 then', res))
        .catch(console.log);
}

//fetchUser();

function fetchUserSeveralTimes(counter = 5) {
    fetch('https://jsonplaceholder.typicode.com/u1sers')
        .then(res => {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            } else {
                if (counter > 0) {
                    fetchUserSeveralTimes(counter - 1);
                } else {
                    throw new Error(res.status);
                }
            }
        })
        .catch(console.log);
}

//fetchUserSeveralTimes();

console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);

// 1/6/3/5/6/2/4/7

const myPromise = delay =>
    new Promise((res, rej) => {
        setTimeout(res, delay);
    });
setTimeout(() => console.log('in setTimeout1'), 1000);
myPromise(1000).then(res => console.log('in Promise 1'));
setTimeout(() => console.log('in setTimeout2'), 100);
myPromise(2000).then(res => console.log('in Promise 2'));
setTimeout(() => console.log('in setTimeout3'), 2000);
myPromise(1000).then(res => console.log('in Promise 3'));
setTimeout(() => console.log('in setTimeout4'), 1000);
myPromise(5000).then(res => console.log('in Promise '));
