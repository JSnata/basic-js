const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

 domains.forEach(domain => {
  const tempArr = domain.split('.'); //split domain into array with separate words
  let tempStr = '';

  for (let k = tempArr.length - 1; k >= 0; k--) {
    //make a new key for object
    tempStr += `.${tempArr[k]}`;

    //check this key presence and add value
    if (obj[`${tempStr}`]) {
      obj[`${tempStr}`] += 1;
    } else {
      obj[`${tempStr}`] = 1;
    }
  }
}) 

  return obj;
}

module.exports = {
  getDNSStats
};
