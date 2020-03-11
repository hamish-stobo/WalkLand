const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getReviewRatings()
    .then(response => {
      res.json(response)
    })
})

router.post('/', (req, res) => {
  db.findUser(req.body.username)
    .then(returnedUser => {
      const newObject = {
        walkId: req.body.walkId,
        username: req.body.username,
        rating: Number(req.body.rating),
        review: req.body.review
      }
      db.addReview(newObject)
        .then(res => res.json('success!'))
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/edit', (req, res) => {
  const newObject = {
    walkId: req.body.walkId,
    username: req.body.username,
    rating: Number(req.body.rating),
    review: req.body.review
  }
  db.editReview(newObject)
      .then(resolve => {
        console.log('res from db ', resolve)
        res.json('')
      })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
