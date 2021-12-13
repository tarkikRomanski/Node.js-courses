function calcSumInArray(inputList) {
    let result = 0

    for (const item of inputList) {
        if (item % 2 !== 0) {
            continue
        }

        result += Number(item)
    }

    return result
}

console.log(calcSumInArray([1, 2, 3, 2]))
