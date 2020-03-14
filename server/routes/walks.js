const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWalks()
    .then(response => {
      res.json(response)
    }
    )
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
)

module.exports = router
