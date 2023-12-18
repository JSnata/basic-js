const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  matrix.forEach((row, rowIndex)  => {
    row.forEach((num, numIndex) => {
      if(typeof matrix[rowIndex - 1] !== 'undefined'){
        if(matrix[rowIndex - 1][numIndex]) {
          result += num;
        }
      } else {
        result += num;
      }
    })
  })

  return result;
}

module.exports = {
  getMatrixElementsSum
};
