// imports
const server = require('./api/server.js')
require('dotenv').config() // enable dotenv module to write our own env vars

// pull port from .env
const PORT = process.env.PORT || 6000 // port fallback

// start the server
server.listen(PORT, () => {
  console.log(`Listening for ${process.env.NODE_ENV} on port ${PORT}`)
})
