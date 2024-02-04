const printSquare = (number) => {
    let sumNumber = 1;
    // 1. N x N 배열을 만든다.
    // 2. 조건에 부합하는 수를 배열에 채운다.
    const arrays = Array.from(Array(number), () => Array(number).fill(0))
    
    for(let i = 0; i < arrays.length; i++) {
      for(let j = 0; j < arrays[i].length; j++) {
        arrays[i][j] += sumNumber;
        
        if(arrays[i][j] >= 10) {
          arrays[i][j] = arrays[i][j] % 10 + 1;
        }
        
        sumNumber++;
      }
    }

  
  for(let i = 0; i < arrays.length; i++) {
    const result = arrays[i].reduce((acc, cur) => acc + ' ' + cur.toString())
    console.log(result)
  }
}

printSquare(4)