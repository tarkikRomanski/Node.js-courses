const {
    getMovieById,
} = require('../services/movie.service')

async function movieByIdController(req, res) {
    const result = await getMovieById(Number(req.params.id))

    res.json(result)
}

module.exports = movieByIdController
