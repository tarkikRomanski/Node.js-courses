const express = require('express')
const bodyParser = require('body-parser')
const movieListController = require('./controllers/movie-list.controller')
const movieByIdController = require('./controllers/movie-by-id.controller')
const sessionsByMovieIdController = require('./controllers/sessions-by-movie-id.controller')
const sessionByIdController = require('./controllers/session-by-id.controller')
const bookTicketController = require('./controllers/book-ticket.controller')
const unbookTicketController = require('./controllers/unbook-ticket-controller')
const getTicketListByUser = require('./controllers/get-ticket-list-by-user.controller')
const getUserIdMiddleware = require('./middlwares/get-user-id.middleware')
const { Op } = require('sequelize')

const Movie = require('./database/models/movie.model')

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

Movie.findByPk(8).then((result) => console.log(result.title))

app.get('/movies', movieListController)

app.get('/movies/:id', movieByIdController)

app.get('/movies/:id/sessions', sessionsByMovieIdController)

app.get('/sessions/:id', sessionByIdController)

app.post('/sessions/:id/tickets', getUserIdMiddleware, bookTicketController)

app.delete('/tickets/:id', getUserIdMiddleware, unbookTicketController)

app.get('/tickets', getUserIdMiddleware, getTicketListByUser)

app.listen(PORT, () => {
    console.log(`Example app listen on http://localhost:${PORT}`)
})
