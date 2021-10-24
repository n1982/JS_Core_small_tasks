/*SumFileSizes
Напишите функцию, которая принимает имена двух файлов и вызывает функцию, переданную третьим параметром и передает ей первым агрументом сумму их размеров.

Для получения рамзера файла необходимо использовать функцию getFileSize(filename, cb).*/

let fileSizes = {
    testFile1: 62,
    testFile2: 48,
};


function getFileSize(filename, cb) {
    console.log(fileSizes[filename])
    setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);

}


function sumFileSizes(filename1, filename2, cb) {
    let sumFileSize = 0
    const fileSize = (acc) => sumFileSize += acc
    getFileSize(filename1, fileSize)
    getFileSize(filename2, fileSize)
    setTimeout(() => cb(sumFileSize), 505)
}

sumFileSizes('testFile1', 'testFile2', (k) => console.log(k))



