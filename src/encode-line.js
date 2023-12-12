const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let accNum = 1;

  for (let i = 0; i < str.length; i++) {
    while (str[i] === str[i + 1]) {
      accNum += 1;
      i++;
    }

    if (accNum === 1) {
      newStr += str[i];
    } else {
      newStr += accNum + str[i];
      accNum = 1;
    }
  }

  return newStr;
}

module.exports = {
  encodeLine
};
