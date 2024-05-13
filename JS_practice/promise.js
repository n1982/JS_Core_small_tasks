let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, '1');
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, '2');
});
let promise3 = new Promise(resolve => {
    setTimeout(resolve, 100, '3');
});
let promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 0, '4');
});

let promiseCall = async iterable => {
    let res = [];
    res = await Promise.allSettled(iterable);
    return res;
};

let promiseCallOrder = arr => {
    if (arr.length === 0) return Promise.resolve([]);
    const copy = [...arr]; // делаем копию, чтобы не изменить исходящий массив

    return new Promise((resolve, reject) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            arr[i]
                .then(res => {
                    copy[i] = res;
                    if (++count === arr.length) resolve(copy);
                })
                .catch(err => reject(err));
        }
    });
};
let promiseCallOrder2 = async arr => {
    if (arr.length === 0) return [];
    let res = [];

    try {
        for (let i = 0; i < arr.length; i++) {
            res[i] = await arr[i];
        }
    } catch (err) {
        throw err;
    }
    return res;
};

// promiseCall([promise1, promise2, promise3, promise4]).then(console.log);
promiseCallOrder2([promise1, promise2, promise3, promise4])
    .then(console.log)
    .catch(console.log);
// allSettled([promise1, promise2, promise3, promise4]).then((value) => {
//     console.log(value);
// });

// PromisemyAll([promise1, promise2, promise3, promise4]).then(console.log)
