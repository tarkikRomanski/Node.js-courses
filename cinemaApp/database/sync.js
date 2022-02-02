const Movie = require('./models/movie.model')
const User = require('./models/user.model')
const Session = require('./models/session.model')
const Ticket = require('./models/ticket.model')
const { sequelize } = require('../database')
const { QueryTypes } = require('sequelize')

function syncDB() {
    return Promise.all([
        Movie.sync(),
        User.sync(),
        Session.sync(),
        Ticket.sync(),
    ])
}

async function getModelsThatDontExist() {
    const modelsThatDoesNotExist = []
    const modelList = [
        Movie,
        User,
        Session,
        Ticket,
    ]

    for (const model of modelList) {
        const tableData = model.getTableName()

        try {
            await sequelize.query(
                `SELECT 1 + 1 as result FROM ${tableData.schema}${tableData.delimiter}${tableData.tableName}`,
                {
                    type: QueryTypes.SELECT,
                },
            )
        } catch (e) {
            if (e.name === 'SequelizeDatabaseError') {
                modelsThatDoesNotExist.push(model)
            } else {
                throw e
            }
        }
    }

    return modelsThatDoesNotExist
}

function setMoviesTestData() {
    return Movie.bulkCreate([
        {
            title: 'Matrix',
            startRentalDate: new Date(),
            endRentalDate: new Date(2022, 3, 15),
            rate: 4.6,
        },
        {
            title: 'Uncharted',
            startRentalDate: new Date(),
            endRentalDate: new Date(2022, 3, 20),
            rate: 3.4,
        },
        {
            title: 'Agent 007',
            startRentalDate: new Date(),
            endRentalDate: new Date(2022, 2, 20),
            rate: 2.6,
        },
        {
            title: 'Deadpool',
            startRentalDate: new Date(2020, 10, 3),
            endRentalDate: new Date(2021, 2, 20),
            rate: 3.8,
        },
    ])
}

function setUsersTestData() {
    return User.bulkCreate([
        {
            name: 'Adult user',
            age: 21,
        },
        {
            name: 'Young user',
            age: 16,
        },
    ])
}

function setSessionsTestData() {
    return Session.bulkCreate([
        {
            startTimeHours: 13,
            startTimeMinutes: 0,
            duration: 90 * 1000 * 60,
            seatsQuantity: 30,
            movieId: 1,
        },
        {
            startTimeHours: 22,
            startTimeMinutes: 0,
            duration: 90 * 1000 * 60,
            seatsQuantity: 30,
            movieId: 1,
        },
        {
            startTimeHours: 22,
            startTimeMinutes: 0,
            duration: 90 * 1000 * 60,
            seatsQuantity: 30,
            movieId: 2,
        },
        {
            startTimeHours: 22,
            startTimeMinutes: 0,
            duration: 90 * 1000 * 60,
            seatsQuantity: 30,
            movieId: 3,
        },
        {
            startTimeHours: 22,
            startTimeMinutes: 0,
            duration: 90 * 1000 * 60,
            seatsQuantity: 30,
            movieId: 4,
        },
        {
            startTimeHours: 15,
            startTimeMinutes: 0,
            duration: 90 * 1000 * 60,
            seatsQuantity: 30,
            movieId: 3,
        },
    ])
}

function setTicketsTestData() {
    return Ticket.bulkCreate([
        {
            seatsQuantity: 1,
            sessionDate: new Date(),
            userId: 1,
            sessionId: 1,
        },
        {
            seatsQuantity: 4,
            sessionDate: new Date(2022, 1, 3),
            userId: 1,
            sessionId: 1,
        },
        {
            seatsQuantity: 4,
            sessionDate: new Date(2022, 1, 3),
            userId: 2,
            sessionId: 3,
        },
    ])
}

function setTestData(modelList) {
    const modelToTestDataMap = new Map([
        [Movie, setMoviesTestData],
        [User, setUsersTestData],
        [Session, setSessionsTestData],
        [Ticket, setTicketsTestData],
    ])

    modelToTestDataMap.forEach((setTestDataFunction, model) => {
        if (modelList.includes(model)) {
            setTestDataFunction()
        }
    })
}

module.exports = {
    syncDB,
    setTestData,
    getModelsThatDontExist,
}
