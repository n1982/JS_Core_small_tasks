/* 
Хорошо, детектив, один из наших коллег успешно наблюдал за нашим целевым человеком, Робби грабителем. Мы последовали за ним на секретный склад, где мы предполагаем найти все украденные вещи. Дверь в этот склад защищена электронным кодовым замком. К сожалению, наш шпион не уверен в PIN-код, который он видел, когда Робби вошел в него.

Клавиатура имеет следующую компоновку:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
Он отметил PIN 1357-код, но он также сказал, что возможно, что каждая из цифр, которые он видел, на самом деле может быть другой соседней цифрой (по горизонтали или вертикали, но не по диагонали). Например. вместо 1 этого это также может быть 2 или 4. И вместо 5 этого это также может быть 2, 4, 6 или 8.

Он также упомянул, что знает этот вид замков. Вы можете ввести неограниченное количество неправильных PIN-кодов, они никогда не заблокируют систему и не подадут сигнал тревоги. Вот почему мы можем опробовать все возможные (*) вариации.

* возможно в смысле: самого наблюдаемого ПИНА и всех вариаций с учетом соседних цифр

Можете ли вы помочь нам найти все эти варианты? Было бы неплохо иметь функцию, которая возвращает массив (или список в Java / Kotlin и C #) всех вариаций для наблюдаемого PIN-кода длиной от 1 до 8 цифр. Мы могли бы назвать функцию getPINs(get_pinsв python, GetPINsв C #). Но обратите внимание, что все контакты, наблюдаемый, а также результаты, должны быть строками из-за потенциально ведущих '0. Мы уже подготовили для вас несколько тестовых примеров.

Детектив, мы рассчитываем на вас!
 */


function getPINs(observed) {
    let combos = [];
    let neighbors = {
        0: ['8'],
        1: ['2', '4'],
        2: ['1', '3', '5'],
        3: ['2', '6'],
        4: ['1', '5', '7'],
        5: ['2', '4', '6', '8'],
        6: ['3', '5', '9'],
        7: ['4', '8'],
        8: ['5', '7', '9', '0'],
        9: ['6', '8'],
    };
    let strDigits = observed.toString().split('');
    getCombos(strDigits, 0, '');
    return combos;

    function getCombos(numbers, idx, curCombo) {
        let curNum = numbers[idx];
        let cundidates = new Set(neighbors[curNum]);
        cundidates.add(curNum);
        cundidates.forEach(idx === numbers.length - 1 ? reachedEnd : goDeeper);


        function goDeeper(candidate) {
            getCombos(numbers, idx + 1, curCombo + candidate);
        }

        function reachedEnd(candidate) {
            combos.push(curCombo+candidate);
        }
    }


    /*
    !!!Code wars solution
    function getPINs(observed) {
  return observed.split('')
  .map( t => ({
    '0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t]))
  .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}*/
}


// console.log(getPINs('369'));
// "8": ["5", "7", "8", "9", "0"],
// "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
// "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
