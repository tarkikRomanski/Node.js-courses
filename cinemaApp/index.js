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

const { Session, Movie } = require('./database/models');

// Movie.findAll().then((result) => {
//     for (const item of result) {
//         console.log(item.titleWithRate)
//
//         item.titleWithRate = 'New Name - 3.4'
//
//         console.log(item.titleWithRate)
//         console.log(item.title)
//         console.log(item.rate)
//     }
// })
//     (
//         async () => {
//             try {
//                 const result = await Movie.create({
//                     title: 'A',
//                     endRentalDate: new Date(),
//                     rate: 5,
//                 })
//             } catch (e) {
//                 if (e instanceof ValidationError) {
//                     for (const error of e.errors) {
//                         console.log({
//                             message: error.message,
//                             value: error.value,
//                             validator: error.validatorKey,
//                             args: error.validatorArgs,
//                         })
//                     }
//                 }
//             }
//
//         }
//     )()

// Movie.findOne({ include: Session }).then(console.log)
// Session.findOne({ include: Movie }).then((result) => console.log(result.Movie.title))

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
