// js is great

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