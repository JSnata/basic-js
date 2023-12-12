const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let newArr = matrix.flat(); //merge all subarrays in one;
  let counter = 0;
  newArr.forEach(function(item, i, arr) {
    if (item === '^^') {
      counter += 1;
    }
  });

  return counter;
}

module.exports = {
  countCats
};
