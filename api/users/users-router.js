// imports
const express = require('express')

// instantiate router
const router = express.Router()

// ENDPOINTS
router.get('/signup', (req, res) => {
  res.json('Inside of signup')
})

// export
module.exports = router