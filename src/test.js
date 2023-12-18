function minesweeper(matrix) {
    const result = [];
    // let counter = 0;
  
    matrix.forEach((row, index) => {
      result.push([]);
    });
  
    
    matrix.forEach((row, rowIndex) => {
      row.forEach((item, itemIndex) => {
        result[rowIndex].push(0);
      });
    });

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
    console.log(result)
  }

  matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
  ]

  minesweeper(matrix);