const printGCD = (n, m) => {
  let result = 0;
  
  for(let i = 0; i < Math.min(n, m); i++) {
    if(n % i === 0 && m % i === 0) {
      result = i;
    }
  }
  
    process.stdout.write(gcd + "\n");
}

const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

printGCD(n, m)