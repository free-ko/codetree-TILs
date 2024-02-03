const printNLinesWords = (n) => {
    const words = Array.from({length: n}, () => '12345^&*()_')
    
    words.forEach((word) => console.log(word))
}

printNLinesWords(4)