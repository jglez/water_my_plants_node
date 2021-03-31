const knex = require('knex')
const configs = require('../../knexfile.js')

const db = knex(configs[process.env.NODE_ENV]) // decides which db to use depending on environment variable
module.exports = db