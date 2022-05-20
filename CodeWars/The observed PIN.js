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
Он отметил PIN1357-код, но он также сказал, что возможно, что каждая из цифр, которые он видел, на самом деле может быть другой соседней цифрой (по горизонтали или вертикали, но не по диагонали). Например. вместо 1 этого это также может быть 2 или 4. И вместо 5 этого это также может быть 2, 4, 6 или 8.

Он также упомянул, что знает этот вид замков. Вы можете ввести неограниченное количество неправильных PIN-кодов, они никогда не заблокируют систему и не подадут сигнал тревоги. Вот почему мы можем опробовать все возможные (*) вариации.

* возможно в смысле: самого наблюдаемого ПИНА и всех вариаций с учетом соседних цифр

Можете ли вы помочь нам найти все эти варианты? Было бы неплохо иметь функцию, которая возвращает массив (или список в Java / Kotlin и C #) всех вариаций для наблюдаемого PIN-кода длиной от 1 до 8 цифр. Мы могли бы назвать функцию getPINs(get_pinsв python, GetPINsв C #). Но обратите внимание, что все контакты, наблюдаемый, а также результаты, должны быть строками из-за потенциально ведущих '0. Мы уже подготовили для вас несколько тестовых примеров.

Детектив, мы рассчитываем на вас!
 */

function getPINs(observed) {
    let combos = [];
    const neighbors = {
        '0': ['8'],
        '1': ['2', '4'],
        '2': ['1', '3', '5'],
        '3': ['2', '5'],
        '4': ['1', '5', '7'],
        '5': ['2', '4', '6', '8'],
        '6': ['3', '5', '9'],
        '7': ['4', '8'],
        '8': ['5', '7', '9', '0'],
        '9': ['6', '8']
    }
    var strDigits = observed.toString().split("");

    getCombos(strDigits, 0, "");
    return combos;


    // Depth first combinatorial traversal
    function getCombos(digits, idx, curCombo) {

        // Get possible candidates
        var curDigit = digits[idx];
        // console.log(curDigit)
        var candidates = new Set(neighbors[curDigit]);
        candidates.add(curDigit);
        console.log(candidates)

        // console.log(digits, idx, curCombo, candidates); // Pretty cool
        candidates.forEach(idx == digits.length - 1 ? reachedEnd : goDeeper);

        // (Avoiding anon funcs)
        function reachedEnd(candidate) { combos.push(curCombo + candidate); }
        function goDeeper(candidate) {
            getCombos(digits, idx + 1, curCombo + candidate)
        }
    }
}
console.log(getPINs('11'))