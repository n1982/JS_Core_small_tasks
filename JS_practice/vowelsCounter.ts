function volwelsCounter(str: string) {
    let volwels: string[] = ['a', 'e', 'u', 'i', 'y', 'o'];
    let counter = 0;
    for (let key of str) {
        if (volwels.includes(key)) counter++;
    }

    return counter;
}

console.log(volwelsCounter('fooderty'));
