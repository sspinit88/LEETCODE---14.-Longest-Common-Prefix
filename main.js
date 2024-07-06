/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.

*/

function longestCommonPrefix(strs) {
  // Если массив пуст, возвращаем пустую строку
  // If the array is empty, return an empty string
  if (strs.length === 0) return '';

  // Изначально предполагаем, что весь первый элемент массива является наибольшим общим префиксом
  // Initially assume the whole first string as the longest common prefix
  let prefix = strs[0];

  // Итерация по массиву строк
  // Iterate over the array of strings
  for (let i = 1; i < strs.length; i++) {
    // Для каждой строки обновляем наибольший общий префикс,
    // чтобы он был общим префиксом текущего наибольшего общего префикса и текущей строки
    // For each string, update the longest common prefix to be
    // the common prefix of the current longest common prefix and the current string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      // Если в какой-то момент наибольший общий префикс становится пустой строкой, //возвращаем пустую строку
      // If at any point the longest common prefix becomes an empty string,
      //return an empty string
      if (prefix === '') return '';
    }
  }

  // Возвращаем наибольший общий префикс
  // Return the longest common prefix
  return prefix;
}

/*

This solution ensures that the algorithm runs in O(n) time complexity 
and uses O(1) space complexity, where n is the sum of all characters in all strings. 
The horizontal scanning approach guarantees that the longest common prefix is correctly calculated.

Это решение гарантирует, что алгоритм работает с временной сложностью O (n)
и использует пространственную сложность O(1), где n — сумма всех символов во всех строках.
Метод горизонтального сканирования гарантирует правильное вычисление самого длинного общего префикса.

*/
