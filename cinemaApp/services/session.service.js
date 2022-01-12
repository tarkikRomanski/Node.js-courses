const SessionDetailed = require('../models/session-detailed.model')
const sessionsMock = require("../mocks/sessions.mock");

function convertSessionToSessionDetailed(session) {
    const currentDate = new Date()

    const startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        session.startTimeHours,
        session.startTimeMinutes,
    )

    const endDate = new Date(startDate.getTime() + session.duration)

    return new SessionDetailed(
        session.id,
        startDate.getTime(),
        endDate.getTime(),
        session.duration,
    )
}

function getSessionsByIds(idList) {
    const sessions = []

    for (const session of sessionsMock) {
        if (!idList.includes(session.id)) {
            continue
        }

        sessions.push(session)

        if (sessions.length === idList.length) {
            break
        }
    }

    return sessions
}

function getSessionById(id) {
    return sessionsMock.find((session) => session.id === Number(id))
}

function isSessionNotStarted(session) {
    const currentDate = new Date()

    const startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        session.startTimeHours,
        session.startTimeMinutes,
    )

    return startDate.getTime() >= currentDate.getTime()
}

module.exports = {
    convertSessionToSessionDetailed,
    getSessionsByIds,
    getSessionById,
    isSessionNotStarted,
}
