const express = require('express')
const bodyParser = require('body-parser')
const movieListController = require('./controllers/movie-list.controller')
const movieByIdController = require('./controllers/movie-by-id.controller')
const sessionsByMovieIdController = require('./controllers/sessions-by-movie-id.controller')
const sessionByIdController = require('./controllers/session-by-id.controller')
const bookTicketController = require('./controllers/book-ticket.controller')
const getUserIdMiddleware = require('./middlwares/get-user-id.middleware')

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/movies', movieListController)

app.get('/movies/:id', movieByIdController)

app.get('/movies/:id/sessions', sessionsByMovieIdController)

app.get('/sessions/:id', sessionByIdController)

app.post('/sessions/:id', getUserIdMiddleware, bookTicketController)

app.listen(PORT, () => {
    console.log(`Example app listen on http://localhost:${PORT}`)
})
