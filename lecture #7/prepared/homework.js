function Movie(title, subtitle, rate) {
  return {
    title,
    subtitle,
    rate,
  }
}

function MovieShort(fullName, rate) {
  return {
    fullName,
    rate,
  }
}

function convertMovieToMovieShort(movie) {
  return new MovieShort(
    `${movie.title} - ${movie.subtitle}`,
    movie.rate,
  )
}

function Rate(p1, p2, p3, p4, p5) {
  return {
    1: p1,
    2: p2,
    3: p3,
    4: p4,
    5: p5,
    getAverage() {
      return (p1 + p2 * 2 + p3 * 3 + p4 * 4 + p5 * 5) / (p1 + p2 + p3 + p4 + p5)
    },
    [Symbol.toPrimitive]: (hint) => {
      switch(hint) {
        case 'number':
        case 'string':
          return this.getAverage()
        default:
          return null
      }
    }
  }
}

const killBill = new Movie(
  'Kill Bill',
  'Episode 1',
  new Rate(2, 4, 0, 5, 1),
)

console.log(convertMovieToMovieShort(killBill))
console.log(Number(killBill.rate.getAverage()))
