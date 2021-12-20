function Movie(title, subtitle, rate) {
    return {
        title,
        subtitle,
        rate,
    }
}

function ShortMovie(fullName, rate) {
    return {
        fullName,
        rate,
    }
}

function convertMovieToShortMovie(movie) {
    return new ShortMovie(
        `${movie.title}. ${movie.subtitle}`,
        movie.rate,
    )
}

function Rate(k1, k2, k3, k4, k5) {
    return {
        1: k1,
        2: k2,
        3: k3,
        4: k4,
        5: k5,
        getAverage() {
            return (k1 + k2 * 2 + k3 * 3 + k4 * 4 + k5 * 5) / (k1 + k2 + k3 + k4 + k5)
        },
        [Symbol.toPrimitive](hint) {
            switch (hint) {
                case 'number':
                case 'string':
                    return this.getAverage()
                default:
                    return this.getAverage() >= 3
            }
        },
    }
}

const killBill = new Movie(
    'Kill Bill',
    'Episode 1',
    new Rate(2, 0, 4, 0, 10)
)

const killBillShort = convertMovieToShortMovie(killBill)

console.log(String(killBillShort.rate))
