const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //turn strings into arrays
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  // matches counter
  let count = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      const k = arr1.indexOf(arr2[i]); 
      arr1.splice(k, 1); //delete match character to avoid duplicate
      count += 1;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
