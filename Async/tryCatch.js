async function fetchUser() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (res.status >= 200 && res.status < 300) {
            console.log(res);
            const resData = await res.json();
            console.log(resData);
        } else throw new Error('Ошибка получения пользователей');
    } catch (err) {
        console.error(err);
    }
}

fetchUser();

async function fetchUserSeveralTimes(counter = 5) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/u1sers');
        if (res.status >= 200 && res.status < 300) {
            console.log(res);
            const resData = await res.json();
            console.log(resData);
        } else throw new Error(`Ошибка получения пользователей`);
    } catch (err) {
        console.log('counter ->', counter);
        if (counter > 0) {
            fetchUserSeveralTimes(counter - 1);
        } else console.error(err);
    }
}

fetchUserSeveralTimes(10);
