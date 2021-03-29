// imports
const express = require('express')

// instance of Express
const server = express()

// middleware
server.use(express.json()) // enable Express to parse JSON bodies

// router

// export
module.exports = server