function getMaxValue(inputList) {
    let result = -Infinity

    for (const item of inputList) {
        const preparedItem = Number(item)

        if (isNaN(preparedItem) || preparedItem <= result) {
            continue
        }

        result = preparedItem
    }

    return result
}

console.log(getMaxValue([1, 23, 5, -12]))
