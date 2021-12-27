const moviesMock = require('../mocks/movies.mock')

function movieListController(req, res) {
    res.json(
        moviesMock.filter(
            (movie) => movie.endRentalDate >= new Date().getTime()
        )
    )
}

module.exports = movieListController