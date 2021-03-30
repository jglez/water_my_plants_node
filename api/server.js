// imports
const express = require('express')
const usersRouter = require('./users/users-router.js')
const morgan = require('morgan') // network activity logger

// instantiate Express application
const server = express()

// global middleware
server.use(express.json()) // enable Express to parse JSON bodies
server.use(morgan('dev')) // request logger

// users router
server.use('/api/users', usersRouter)

// export
module.exports = server
