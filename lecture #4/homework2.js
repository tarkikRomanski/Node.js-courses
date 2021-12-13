function getMaxValue(inputList) {
    let result = -Infinity
    let resultIndex = 0
    let i = 0

    for (const item of inputList) {
        const preparedItem = Number(item)

        if (isNaN(preparedItem) || preparedItem <= result) {
            i++

            continue
        }

        result = preparedItem
        resultIndex = i++
    }

    return [result, resultIndex]
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

function sort(inputArray) {
    let list = [...inputArray]
    const result = []

    for (const item of inputArray) {
        const [maxValue, maxValueIndex] = getMaxValue(list)

        result.unshift(maxValue)
        list = removeByIndex(list, maxValueIndex)
    }

    return result
}

console.log(sort([1, 23, 5, -12]))


