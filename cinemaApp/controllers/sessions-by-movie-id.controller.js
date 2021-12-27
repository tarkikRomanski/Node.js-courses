const {
    getMovieById,
} = require('../services/movie.service')
const {
    convertSessionToSessionDetailed,
} = require('../services/session.service')

function sessionsByMovieIdController(req, res) {
    const { sessions } = getMovieById(Number(req.params.id))

    const preparedSessions = sessions.filter((session) => {
        const currentDate = new Date()

        const startDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            session.startTimeHours,
            session.startTimeMinutes,
        )

        return startDate.getTime() >= currentDate.getTime()
    })

    res.json(
        preparedSessions.map(convertSessionToSessionDetailed)
    )
}

module.exports = sessionsByMovieIdController
