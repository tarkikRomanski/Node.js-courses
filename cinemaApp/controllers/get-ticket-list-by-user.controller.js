const {
    sendSuccessResponse,
} = require('../services/response.service')
const ticketsMock = require('../mocks/tickets.mock')

function getTicketListByUserController(req, res) {
    const isShowHistory = Number(req.query.showHistory)

    const userTickets = ticketsMock.filter(
        (ticket) => {
            return ticket.userId === req.userId
                && (isShowHistory || ticket.date.getTime() >= new Date().getTime())
        }
    )

    sendSuccessResponse(
        res,
        userTickets,
    )
}

module.exports = getTicketListByUserController
