function parseWordsFromString(input) {
    const preparedInput = String(input)
    const result = []
    let currentWord = ''

    for (let i = 0; i < preparedInput.length; i++) {
        const symbol = preparedInput[i]

        if (
            symbol !== ' '
            && symbol !== '.'
            && symbol !== ','
            && symbol !== '!'
            && symbol !== '?'
        ) {
            currentWord += symbol

            continue
        }

        if (symbol === ' ' && currentWord === '') {
            continue
        }

        result.push(currentWord)
        currentWord = ''
    }

    return result
}

console.log(parseWordsFromString('Hello, world!'))