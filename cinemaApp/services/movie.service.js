const Movie = require("../database/models/movie.model");
const {Op} = require("sequelize");

function getMoviesGteEndRentalDate(date) {
    return Movie.findAll({
        where: {
            endRentalDate: {
                [Op.gte]: date,
            }
        }
    })
}

function getMovieById(id) {
    return Movie.findByPk(Number(id))
}

module.exports = {
    getMovieById,
    getMoviesGteEndRentalDate,
}
