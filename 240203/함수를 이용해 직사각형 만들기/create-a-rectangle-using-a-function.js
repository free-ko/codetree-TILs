const printSquare = (row, column) => {
    const arrays = Array.from(Array(row), () => new Array(column).fill('1'))

    arrays.forEach((items) => {
        const test = items.reduce((acc, cur) => acc + cur)
        
        console.log(test)
    })
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [rowNum, colNum] = input.map(Number);
printSquare(rowNum, colNum);