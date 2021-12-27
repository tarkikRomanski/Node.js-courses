const moviesMock = require("../mocks/movies.mock")

function getMovieById(id) {
    return moviesMock.find((movie) => movie.id === Number(id))
}

module.exports = {
    getMovieById,
}
