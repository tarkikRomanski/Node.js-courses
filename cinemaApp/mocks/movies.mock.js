const Movie = require('../models/movie.model')

const movies = [
    new Movie(
        1,
        'Matrix',
        Date.UTC(2021, 10, 3),
        Date.UTC(2022, 1, 10),
        [1, 2, 3],
    ),
    new Movie(
        2,
        'Uncharted',
        Date.UTC(2021, 12, 3),
        Date.UTC(2022, 1, 10),
        [4, 5, 6],
    ),
    new Movie(
        3,
        'Agent 007',
        Date.UTC(2021, 11, 15),
        Date.UTC(2022, 1, 10),
        [7, 8],
    ),
    new Movie(
        4,
        'Deadpool',
        Date.UTC(2020, 10, 3),
        Date.UTC(2021, 1, 10),
        [9, 10, 11],
    ),
]

module.exports = movies
