const ticketsMock = require('../mocks/tickets.mock')

function getNewTicketId() {
    const sortedTickets = ticketsMock.sort(
        (current, prev) => current.id - prev.id
    )

    return ++sortedTickets[sortedTickets.length - 1].id
}

module.exports = {
    getNewTicketId,
}
