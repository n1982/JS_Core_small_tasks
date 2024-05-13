//полифил PromiseAllSetled
function allSettled(promises) {
    let wrappedPromises = promises.map(item =>
        Promise.resolve(item).then(
            result => {
                return { status: 'fulfiled', value: result };
            },
            err => {
                return { status: 'reject', value: err };
            },
        ),
    );
    return Promise.all(wrappedPromises);
}
