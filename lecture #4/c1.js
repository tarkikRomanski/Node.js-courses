function calcSumInArray(inputList) {
    let result = 0

    for (const item of inputList) {
        result += Number(item)
    }

    return result
}

console.log(calcSumInArray([1, 2, 3, 2]))
