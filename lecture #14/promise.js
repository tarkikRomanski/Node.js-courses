function runSyncCode1() {
    console.log('sync code 1')
}

function runSyncCode2() {
    console.log('sync code 2')
}

function runSyncCode3() {
    console.log('sync code 3')
}

runSyncCode1()
runSyncCode2()

const promise = new Promise((resolve, reject) => {
    const b = 10 + 2

    const a = b + 5

    setTimeout(
        () => {
            console.log('Code in promise 1')

            resolve(b + 10)
        },
        1000,
    )
})

console.log(promise)

let d = 0

promise.then((data) => {
    console.log('Promise result', data)

    d = data
})
.then((data) => {
    console.log('Promise next result', d)
})

console.log(d)



runSyncCode3()