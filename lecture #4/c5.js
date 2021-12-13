function getDigits(input) {
    const result = []
    const preparedNumber = String(input)

    for (const digit of preparedNumber) {
        result.push(Number(digit))
    }

    return result
}

console.log(getDigits(234))
