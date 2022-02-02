const { syncDB, setTestData, getModelsThatDontExist } = require('./database/sync');

// async function run() {
//     const modelList = await getModelsThatDontExist()
//     await syncDB()
//     setTestData(modelList)
// }
//
// run()

(
    async () => {
        const modelList = await getModelsThatDontExist()
        await syncDB()
        setTestData(modelList)
    }
)()
