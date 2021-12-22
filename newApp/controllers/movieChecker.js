function Movie(id, name, age) {
    return {
        id,
        name,
        age
    }
}

const movies = [
    new Movie(1, 'Commando', 18),
    new Movie(2, 'Matrix', 18),
    new Movie(3, 'Lord of the Rings', 12),
    new Movie(4, 'Agent 007', 20),
];

function getMovieById(id) {
    for (const movie of movies) {
        if (movie.id === Number(id)) {
            return movie;
        }
    }

    return null;
}

function checkAge(id, age) {
    const movie = getMovieById(id);

    return movie && movie.age < Number(age);
}

function movieCheckerController() {
    return (req, res) => {
        const { movieId, clientAge } = req.params

        const result = checkAge(movieId, clientAge)

        res.send(result ? 'Can' : 'Can\'t')
    }
}

module.exports = {
    movieCheckerController,
}
