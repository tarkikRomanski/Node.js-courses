function Session(id, startTimeHours, startTimeMinutes, duration) {
    return {
        id,
        startTimeHours,
        startTimeMinutes,
        duration: duration * 1000 * 60,
    }
}

module.exports = Session
