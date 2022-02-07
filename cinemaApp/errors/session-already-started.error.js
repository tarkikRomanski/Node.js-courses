class SessionAlreadyStartedError extends Error {
    constructor(type) {
        super('Session already started!');
        this.type = type
    }
}

module.exports = {
    SessionAlreadyStartedError
}