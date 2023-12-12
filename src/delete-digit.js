const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newArr = n.toString(10).split('').map((int) => parseInt(int, 10)); //make array of numbers
  let maxCounter = 0;

  //loop array to find max counter
  newArr.forEach((num, index) => {
    const tempArr = [...newArr];
    tempArr.splice(index, 1);
    const result = Number(tempArr.join(''));
    if(result > maxCounter ) {
      maxCounter = result;
    }
  })

  return maxCounter;
}

module.exports = {
  deleteDigit
};
