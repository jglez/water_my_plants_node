// imports
const express = require('express')
const usersRouter = require('./users/users-router.js')

// instance of Express
const server = express()

// global middleware
server.use(express.json()) // enable Express to parse JSON bodies

// users router
server.use('/api/users', usersRouter)

// export
module.exports = server