function Session(id, startTimeHours, startTimeMinutes, duration, seats) {
    return {
        id,
        startTimeHours,
        startTimeMinutes,
        duration: duration * 1000 * 60,
        seats,
    }
}

module.exports = Session
