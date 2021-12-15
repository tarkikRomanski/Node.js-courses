function getValuesSum(inputObject) {
    let result = 0

    for (const key in inputObject) {
        result += inputObject[key]
    }

    return result
}

const a = {
    a: 1,
    b: 2,
}

console.log(getValuesSum(a))
