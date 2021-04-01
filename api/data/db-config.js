const knex = require('knex')
const configs = require('../../knexfile.js') // different configurations for different environments

const db = knex(configs[process.env.NODE_ENV]) // decides which db to use depending on the value of the environment variable NODE_ENV
module.exports = db
