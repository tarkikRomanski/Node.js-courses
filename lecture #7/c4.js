function Movie(title, subtitle, rate = 0) {
    return {
        title,
        subtitle,
        rate: Number(rate),
    }
}

function removeByIndex(inputArray, index) {
    const result = []
    let i = 0

    for (const item of inputArray) {
        if (index === i) {
            i++

            continue
        }

        result.push(item)
        i++
    }

    return result
}

function sortObjectsByKey(inputList, key) {
    const result = []
    let preparedList = [ ...inputList ]


    for (let i = 0; i < inputList.length; i++) {
        let minValue = preparedList[0]
        let minValueIndex = 0

        for (let j = 1; j < preparedList.length; j++) {
            const currentItem = preparedList[j]

            if (minValue[key] <= currentItem[key]) {
                continue
            }

            minValue = currentItem
            minValueIndex = j
        }

        result.push(minValue)
        preparedList = removeByIndex(preparedList, minValueIndex)
    }

    return result
}

const movieList = [
    new Movie('Kill Bill', 'Episode 2', 4),
    new Movie('Kill Bill', 'Episode 1', 4),
    new Movie('Star Wars', 'Episode 4', 5),
    new Movie('Dumb Dumbest', '1', 2.4),
]

console.log(sortObjectsByKey(movieList, 'rate'))
