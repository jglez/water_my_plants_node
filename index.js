// imports
const server = require('./api/server.js')
require('dotenv').config() // enable dotenv module to write our own env vars

const PORT = 5000

// start the server
server.listen(PORT, () => {
  console.log(`Listening for ${process.env.NODE_ENV} on port ${PORT}`)
})
