function sortByHeight(arr) {
    const indexStaticCounts = [];
  
    const newArr = arr.filter((n, index) => {
      if (n === -1) {
        indexStaticCounts.push(index);
      } else {
        console.log(n);
        return n;
      }
    });

    console.log(newArr);

    newArr.sort((a, b) => a - b);
  
    indexStaticCounts.forEach(count => {
      newArr.splice(count, 0, -1);
    });
    return newArr;
  }

  arr = [-1, 150, 190, 170, -1, -1, 160, 180]
  sortByHeight(arr);