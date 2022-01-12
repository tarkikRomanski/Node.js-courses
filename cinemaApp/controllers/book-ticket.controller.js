const {
    getSessionById,
    isSessionNotStarted,
} = require('../services/session.service')
const {
    getNewTicketId,
} = require('../services/ticket.service')
const {
    sendSuccessResponse,
    sendErrorResponse,
} = require('../services/response.service')
const Ticket = require('../models/ticket.model')

function bookTicketController(req, res) {
    const { id } = req.params
    const { seats } = req.body

    const session = getSessionById(id)

    if (!isSessionNotStarted(session)) {
        sendErrorResponse(res, 'Session already started!')

        return
    }

    if (seats > session.seats) {
        sendErrorResponse(res, 'Not enough seats!')

        return
    }

    sendSuccessResponse(
        res,
        new Ticket(getNewTicketId(), req.userId, seats, id),
        201,
    )
}

module.exports = bookTicketController
