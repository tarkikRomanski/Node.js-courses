const ticketsMock = require('../mocks/tickets.mock')
const {
    sendSuccessResponse,
    sendErrorResponse,
} = require('../services/response.service')

function unbookTicketController(req, res) {
    const id = Number(req.params.id)

    const unbookingTicket = ticketsMock.find((ticket) => ticket.id === id)

    if (!unbookingTicket) {
        sendErrorResponse(res, 'Ticket is not exist!')

        return
    }

    if (unbookingTicket.userId !== req.userId) {
        sendErrorResponse(res, 'You have not permissions!', 403)

        return
    }

    unbookingTicket.deleted = true

    sendSuccessResponse(res, unbookingTicket)
}

module.exports = unbookTicketController
