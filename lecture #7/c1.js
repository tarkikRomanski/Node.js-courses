function getKeys(inputObject) {
    const result = []

    for (const key in inputObject) {
        result.push(key)
    }

    return result
}

const o = {10: 3, 5: 4, 4: 2, 41: 2, 1: 3}

console.log(getKeys(o))
