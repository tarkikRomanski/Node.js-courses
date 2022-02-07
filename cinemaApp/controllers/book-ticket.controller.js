const sessionService = require('../services/session.service')
const ticketService = require('../services/ticket.service')
const {
    getNewTicketId,
} = require('../services/ticket.service')
const {
    sendSuccessResponse,
    sendErrorResponse,
} = require('../services/response.service')
const Ticket = require('../models/ticket.model')
const {NotEnoughSeatsError} = require("../errors/not-enough-seats.error");
const {SessionAlreadyStartedError} = require("../errors/session-already-started.error");

async function bookTicketController(req, res) {
    const { id: sessionId } = req.params
    const { seatsQuantity, sessionDate } = req.body

    const session = await sessionService.getById(sessionId)

    try {
        const result = await ticketService.create(
            session,
            {
                seatsQuantity,
                sessionDate,
                userId: req.userId,
                sessionId: sessionId
            },
        )

        sendSuccessResponse(
            res,
            result,
            201,
        )
    } catch (err) {
        if (err instanceof NotEnoughSeatsError) {
            sendErrorResponse(res, 'Not enough seats!')

            return
        }

        if (err instanceof SessionAlreadyStartedError) {
            sendErrorResponse(res, 'Session already started!')

            return
        }

        throw err
    }
}

module.exports = bookTicketController
