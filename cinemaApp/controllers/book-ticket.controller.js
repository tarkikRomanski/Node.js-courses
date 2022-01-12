const {
    getSessionById,
    isSessionNotStarted,
} = require('../services/session.service')
const {
    getNewTicketId,
} = require('../services/ticket.service')
const Ticket = require('../models/ticket.model')

function bookTicketController(req, res) {
    const { id } = req.params
    const { seats } = req.body

    const session = getSessionById(id)

    if (!isSessionNotStarted(session)) {
        res.status(400)
            .json({
                type: "error",
                message: "Session already started!",
            })

        return
    }

    if (seats > session.seats) {
        res.status(400)
            .json({
                type: "error",
                message: "Not enough seats!",
            })

        return
    }

    console.log(req.userId)

    res.status(201)
        .json({
            type: "success",
            ticket: new Ticket(getNewTicketId(), null, seats, id)
        })
}

module.exports = bookTicketController
