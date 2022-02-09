const { Ticket } = require('../database/models')
const {isSessionNotStarted} = require("../services/session.service");
const { NotEnoughSeatsError } = require('../errors/not-enough-seats.error')
const { SessionAlreadyStartedError } = require('../errors/session-already-started.error')

async function create(session, data) {
    if (!isSessionNotStarted(session)) {
        throw new SessionAlreadyStartedError
    }

    const sessionDate = new Date(data.sessionDate)
    const preparedDate = `${sessionDate.getFullYear()}-${sessionDate.getMonth()+1}-${sessionDate.getDate()}`

    const [{sum: reservedTicketsQuantity}] = await Ticket.sequelize.query(
        `SELECT sum(seats_quantity) FROM app.tickets
           WHERE deleted_at IS NULL
               AND session_id = $sessionId
               AND session_date >= $startDate
               AND session_date <= $endDate`,
        {
            bind: {
                sessionId: session.id,
                startDate:  `${preparedDate} 00:00:00.000000 +00:00`,
                endDate: `${preparedDate} 23:59:59.999999 +00:00`,
            },
        },
    )

    console.log(reservedTicketsQuantity)

    if (data.seatsQuantity > session.seatsQuantity - Number(reservedTicketsQuantity)) {
        throw new NotEnoughSeatsError
    }

    return Ticket.create(data)
}

module.exports = {
    create,
}
