function parseWordsFromString(input) {
    const preparedInput = String(input)
    const result = []
    let currentWord = ''

    for (let i = 0; i < preparedInput.length; i++) {
        const symbol = preparedInput[i]

        if (
            symbol === '.'
            || symbol === ','
            || symbol === '!'
            || symbol === '?'
        ) {
            result.push(currentWord)
            result.push(symbol)
            currentWord = ''

            continue
        }

        if (symbol !== ' ') {
            currentWord += symbol

            continue
        }

        if (symbol === ' ' && currentWord === '') {
            continue
        }

        result.push(currentWord)
        currentWord = ''
    }

    if (currentWord) {
        result.push(currentWord)
    }

    return result
}

function moderateString(input) {
    const preparedInput = String(input)
    const words = parseWordsFromString(preparedInput)
    const moderatedWords = []
    let result = ''

    for (const word of words) {
        if (word === 'one' || word === 'dot' || word === 'number') {
            continue
        }

        moderatedWords.push(word)
    }

    for (let i = 0; i < moderatedWords.length; i++) {
        const currentWord = moderatedWords[i]
        const nextWord = moderatedWords[i + 1]
        const prevWord = moderatedWords[i - 1]

        if (
            (currentWord === ',' || currentWord === '.')
            && prevWord
            && (prevWord === ',' || prevWord === '.')
        ) {
            continue
        }

        result += currentWord

        if (currentWord === ',' || currentWord === '.') {
            result += ' '

            continue
        }

        if (nextWord !== ',' && nextWord !== '.') {
            result += ' '
        }
    }

    return result
}

console.log(moderateString('Hello, one, world!'))