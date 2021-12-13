function getNumberFromString(input) {
    const preparedInput = String(input)
    let result = ''

    for (let i = 0; i < preparedInput.length; i++) {
        const symbol = preparedInput[i]

        if (isNaN(Number(symbol))) {
            continue
        }

        result += symbol
    }

    return result ? Number(result) : NaN
}

console.log(getNumberFromString('test12'))
