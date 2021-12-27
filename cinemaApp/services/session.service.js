const SessionDetailed = require('../models/session-detailed.model')

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
        startDate.getTime(),
        endDate.getTime(),
        session.duration,
    )
}

module.exports = {
    convertSessionToSessionDetailed,
}
