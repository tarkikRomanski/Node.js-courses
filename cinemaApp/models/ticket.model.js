function Ticket(id, userId, seats, sessionId) {
    return {
        id,
        userId,
        seats,
        sessionId,
    }
}

module.exports = Ticket
