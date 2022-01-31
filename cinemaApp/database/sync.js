const Movie = require('./models/movie.model')
const User = require('./models/user.model')
const Session = require('./models/session.model')
const Ticket = require('./models/ticket.model')

function syncDB() {
    Movie.sync()
    User.sync()
    Session.sync()
    Ticket.sync()
}

module.exports = {
    syncDB,
}
