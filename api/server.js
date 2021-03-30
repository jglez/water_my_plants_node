// imports
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const usersRouter = require('./users/users-router.js')

// instantiate Express application
const server = express()

// global middleware
server.use(cors()) // enable cross-origin requests
server.use(morgan('dev')) // http request logger
server.use(express.json()) // enable Express to parse JSON bodies

// users router
server.use('/api/users', usersRouter)

// error handling middleware
server.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    message: err.message, // receives actual error that was thrown
    stack: err.stack // function call stack
  })
})

// export
module.exports = server
