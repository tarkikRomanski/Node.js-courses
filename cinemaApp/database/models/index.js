const Movie = require('../models/movie.model')
const Session = require('../models/session.model')
const Ticket = require('../models/ticket.model')
const User = require('../models/user.model')

// movie - session M2O
Session.belongsTo(Movie, { foreignKey: 'movie_id' })
Movie.hasMany(Session, { foreignKey: 'movie_id'  })
//

// ticket - user O2M
Ticket.belongsTo(User, { foreignKey: 'user_id' })
User.hasMany(Ticket, { foreignKey: 'user_id' })
//

// session - ticket M2O
Session.hasMany(Ticket, { foreignKey: 'session_id' })
Ticket.belongsTo(Session, { foreignKey: 'session_id' })
//

module.exports = {
    Movie,
    Session,
    Ticket,
    User,
}