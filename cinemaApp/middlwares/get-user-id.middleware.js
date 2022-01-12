function getUserIdMiddleware(req, res, next) {
    const userId = Number(req.header('User-Id'))

    req.userId = userId

    next()
}

module.exports = getUserIdMiddleware
