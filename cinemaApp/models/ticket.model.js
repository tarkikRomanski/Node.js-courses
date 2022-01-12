function Ticket(id, userId, seats, sessionId, date = new Date(), deleted = false) {
    return {
        id,
        userId,
        seats,
        sessionId,
        date,
        deleted,
    }
}

module.exports = Ticket
