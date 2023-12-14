function getSeason(date) {
    if (date == null) return 'Unable to determine the time of year!'; // check if date is passed
    console.log(date.hasOwnProperty("toString"));
    if (date instanceof Date) {
      if (Object.prototype.toString.call(date) !== '[object Date]' || date.hasOwnProperty("toString")) { //check if date is Date
        throw new Error('Invalid date!');
      } 
    
      let month = date.getMonth();
    
      if (month > 1 && month < 5 ) {
        return 'spring'
      } else if (month > 4 && month < 8 ) {
        return 'summer'
      } else if (month > 7 && month < 11 ) {
        return 'autumn'
      }
      else {
        return 'winter'
      }
    }
  
    throw new Error('Invalid date!')
}

makeFake = () => {
        const fakeDate = {
            toString() {
                return Date.prototype.toString.call(new Date());
            },
            [Symbol.toStringTag]: 'Date'
        };

     Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
     return fakeDate;
}

let trueData = new Date(1456, 0, 2, 1, 50, 9, 238);
let fakeData = makeFake();
getSeason(trueData);

getSeason(fakeData);