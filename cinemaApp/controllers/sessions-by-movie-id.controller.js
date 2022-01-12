const {
    getMovieById,
} = require('../services/movie.service')
const {
    convertSessionToSessionDetailed,
    getSessionsByIds,
    isSessionNotStarted,
} = require('../services/session.service')

function sessionsByMovieIdController(req, res) {
    const { sessions: sessionIds } = getMovieById(Number(req.params.id))
    const sessions = getSessionsByIds(sessionIds)

    const preparedSessions = sessions.filter(isSessionNotStarted)

    res.json(
        preparedSessions.map(convertSessionToSessionDetailed)
    )
}

module.exports = sessionsByMovieIdController
