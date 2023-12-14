const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let controlCounts = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ]

  if (Array.isArray(arr)) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === controlCounts[0]) {
        if (i !== arr.length - 1) {
          i++;
        } else {
          continue;
        }
      } else if (arr[i] === controlCounts[1]) {
        if (arr[i - 2] === controlCounts[0]){
          continue;
        }
        else if(i !== 0) {
          newArr.pop();
        } else {
          continue;
        }
      } else if (arr[i] === controlCounts[2]) {
        if (i !== arr.length - 1) {
          newArr.push(arr[i + 1]);
          newArr.push(arr[i + 1]);
          i++;
        } else {
          continue;
        }

      } else if (arr[i] === controlCounts[3]){

        if (arr[i - 2] === controlCounts[0]){
          continue;
        }
           else if(i !== 0) {
            newArr.push(newArr[newArr.length - 1]);
          }
            else {
            continue;
          }
      }
      else {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  } 

  throw new Error(`'arr' parameter must be an instance of the Array!`);
}

module.exports = {
  transform
};
