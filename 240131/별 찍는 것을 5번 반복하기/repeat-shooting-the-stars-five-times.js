const printStar = (count) => {
    let result='';

    for(let i = 0; i < count; i++) {
        result += '*'
    }

    return result
}

const printColumStar = (count) => {
    for(let i = 0; i < count; i++) {
        console.log(printStar(10))
    }
}

printColumStar(5)