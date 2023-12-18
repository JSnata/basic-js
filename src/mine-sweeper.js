const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  matrix.forEach((row, index) => {
    result.push([]);
  });

  
  matrix.forEach((row, rowIndex) => {
    row.forEach((item, itemIndex) => {
      result[rowIndex].push(0);
    });
  });

  //i know that it is not the best solution :) but i did what i could

  matrix.forEach((row, rowIndex) => {
      row.forEach((item, itemIndex) => {
          if(item) {
              if(typeof result[rowIndex - 1] !== "undefined"){
                  (typeof result[rowIndex - 1][itemIndex] !== "undefined") && (result[rowIndex - 1][itemIndex] += 1);
                  (typeof result[rowIndex - 1][itemIndex + 1] !== "undefined") && (result[rowIndex - 1][itemIndex + 1] += 1);
                  (typeof result[rowIndex - 1][itemIndex - 1] !== "undefined") && (result[rowIndex - 1][itemIndex - 1] += 1);
              }

              (typeof result[rowIndex][itemIndex + 1] !== "undefined") && (result[rowIndex][itemIndex + 1] += 1);
              (typeof result[rowIndex][itemIndex - 1] !== "undefined") && (result[rowIndex][itemIndex - 1] += 1);

              if(typeof result[rowIndex + 1] !== "undefined"){
                  (typeof result[rowIndex + 1][itemIndex] !== "undefined") && (result[rowIndex + 1][itemIndex] += 1);
                  (typeof result[rowIndex + 1][itemIndex + 1] !== "undefined") && (result[rowIndex + 1][itemIndex + 1] += 1);
                  (typeof result[rowIndex + 1][itemIndex - 1] !== "undefined") && (result[rowIndex + 1][itemIndex - 1] += 1);
              }
          }
      });
  });
  return result;
}

module.exports = {
  minesweeper
};
