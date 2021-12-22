function checkArrayType(inputList) {
    for (let i = 1; i < inputList.length; i++) {
        if (typeof inputList[i] !== typeof inputList[i-1]) {
            return false
        }
    }

    return true
}

console.log(checkArrayType([{}, {}, {}]))
