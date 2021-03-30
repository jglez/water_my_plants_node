// imports
const express = require('express')
const User = require('./users-model.js') // Users Model

// instantiate router
const router = express.Router()

/***** ENDPOINTS *****/
// [POST] user signup
router.post('/signup', (req, res) => {
  User.create()
    .then(res.status(200).json('Inside of signup'))
})

// [POST] user login
router.post('/login', (req, res) => {
  User.findById()
    .then(res.status(200).json('Inside of login'))
})

// export
module.exports = router
