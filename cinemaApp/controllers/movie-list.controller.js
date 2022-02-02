const { getMoviesGteEndRentalDate } = require('../services/movie.service')

async function movieListController(req, res) {
    const result = await getMoviesGteEndRentalDate(new Date())

    res.json(result)
}

module.exports = movieListController