const SessionDetailed = require('../models/session-detailed.model')

const { Session } = require('../database/models')

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
    return Session.findAll({
        where: {
            id: idList,
        }
    })
}

function getById(id) {
    return Session.findByPk(id)
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
    getById,
    isSessionNotStarted,
}
