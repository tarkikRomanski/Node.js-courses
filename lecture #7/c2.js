function removeProperty(inputObject, key) {
    const preparedObject = { ...inputObject }

    delete preparedObject[key]

    return preparedObject
}

const a = {
    a: 1,
    b: 2,
}

console.log(removeProperty(a, 'a'))
console.log(a)
