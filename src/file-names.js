const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newArr = [];
  let count = 0;
  names.forEach(name => {
    if (newArr.includes(name)) {
      for (let k = 0; k < newArr.length; k++) {
        if (name === newArr[k]) {
          count += 1;
          const newStr = `${newArr[k]}(${count})`;
          newArr.push(newStr);
        }
      }
    } else {
      count = 0;
      newArr.push(name);
    }
  })
  return newArr;
}

module.exports = {
  renameFiles
};
