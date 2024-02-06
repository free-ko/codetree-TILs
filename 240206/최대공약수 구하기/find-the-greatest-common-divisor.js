const printGCD = (n, m) => {
  let result = 0;
  
  for(let i = 0; i < Math.min(n, m); i++) {
    if(n % i === 0 && m % i === 0) {
      result = i;
    }
  }
  
  return result;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [rowNum, colNum] = input.map(Number);

console.log(printGCD(rowNum, colNum))