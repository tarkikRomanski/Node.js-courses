const {
    convertSessionToSessionDetailed,
    getSessionById,
} = require('../services/session.service')

function sessionByIdController(req, res) {
    const { id } = req.params

    res.json(convertSessionToSessionDetailed(getSessionById(id)))
}

module.exports = sessionByIdController
