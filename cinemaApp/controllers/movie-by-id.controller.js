const {
    getMovieById,
} = require('../services/movie.service')

function movieByIdController(req, res) {
    res.json(getMovieById(Number(req.params.id)))
}

module.exports = movieByIdController
