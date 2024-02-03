const printSquare = (row, column) => {
    const arrays = Array.from(Array(row), () => new Array(column).fill('1'))

    arrays.forEach((items) => {
        const test = items.reduce((acc, cur) => acc + cur)
        console.log(test)
    })
}

printSquare(2,3)