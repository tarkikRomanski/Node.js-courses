// js is great

function Movie(name, age) {
    return {
        name,
        age
    }
}

const movies = [
    new Movie('Commando', 18),
    new Movie('Matrix', 18),
    new Movie('Lord of the Rings', 12),
    new Movie('Agent 007', 20),
];

function getMovieByName(name) {
    for (const movie of movies) {
        if (movie.name === name) {
            return movie;
        }
    }

    return null;
}

function checkAge(name, age) {
    const movie = getMovieByName(name);

    return movie && movie.age < Number(age);
}

console.log('try Matrix', checkAge('Matrix',17));
console.log('try 007', checkAge('Agent 007', 21));