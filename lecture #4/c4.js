function getMaxLengthString(inputList) {
    let result = ''
    let maxStringLength = 0

    for (const item of inputList) {
        const preparedItem = String(item)
        const itemLength = preparedItem.length

        if (itemLength <= maxStringLength) {
            continue
        }

        result = preparedItem
        maxStringLength = itemLength
    }

    return result
}

console.log(getMaxLengthString(['1', null, '123']))