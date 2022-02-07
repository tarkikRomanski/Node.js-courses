class NotEnoughSeatsError extends Error {
    constructor(type) {
        super('Not enough seats!');
        this.type = type
    }
}

module.exports = {
    NotEnoughSeatsError
}