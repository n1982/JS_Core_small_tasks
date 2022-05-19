// TODO <Remove Duplicates from Sorted Array>
/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

    Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

    Return k after placing the final result in the first k slots of nums.

    Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

    Учитывая целочисленный массивnums, отсортированный в неубывающем порядке, удалите дубликаты на месте, чтобы каждый уникальный элемент появлялся только один раз. Относительный порядок элементов должен оставаться неизменным.

Поскольку в некоторых языках невозможно изменить длину массива, вместо этого вы должны поместить результат в первую часть массива nums. Более формально, если k после удаления дубликатов есть элементы, то первые k элементы nums должны содержать конечный результат. Не имеет значения, что вы оставляете за пределами первых k элементов.

Возврат k после размещения конечного результата в первые k слоты nums .

Не выделяйте дополнительное пространство для другого массива. Вы должны сделать это, изменив входной массив на месте с помощью O(1) дополнительной памяти.*/

let nums = [0, 1, 1, 2, 2, 2, 3, 3, 4, 4];
var removeDuplicates = function (nums) {
  let indexL = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[indexL] = nums[i];
      indexL += 1;
    }
  }
  console.log(nums);
  return indexL;
};

console.log(removeDuplicates(nums));

// TODO 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

/*
Фраза является палиндромом, если после преобразования всех прописных букв в строчные и удаления всех не буквенно-цифровых символов она читается одинаково вперед и назад. Буквенно-цифровые символы включают в себя буквы и цифры.

Учитывая строку s, верните true, если это палиндром, или false в противном случае.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.*/
let str = '0P';
var isPalindrome = function (s) {
  if (!!s.match(/[a-zA-Z0-9]/gi)) {
    let subStr = s
      .match(/[a-zA-Z0-9]/gi)
      .join('')
      .toLowerCase();
    return subStr === subStr.split('').reverse().join('');
  }
  return true;
};

console.log(isPalindrome(str));
