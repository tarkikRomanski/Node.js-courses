function Movie(id, title, startRentalDate, endRentalDate, sessions) {
    return {
        id,
        title,
        startRentalDate,
        endRentalDate,
        sessions,
    }
}

module.exports = Movie
