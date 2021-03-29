// import server
const server = require('./api/server.js')

const PORT = 5000

// start the server
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
