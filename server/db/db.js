const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getWalks,
  findUser,
  findUserJWT,
  registerUser,
  deleteUser,
  getReviewRatings,
  addReview,
  editUser,
  editReview,
  deleteReview
}

function getUsers (db = connection) {
  return db('users')
    .select()
}

function findUser (username, db = connection) {
  return db('users')
    .where('username', username)
    .first()
}

function editUser (userObj, db = connection) {
  return db('users')
    .where('username', userObj.username)
    .update(userObj)
}

function registerUser (user, db = connection) {
  return db('users')
    .insert(user)
}

function findUserJWT (id, db = connection) {
  return db('users')
    .where('id', id)
    .first()
}

function deleteUser (username, db = connection) {
  return db('users')
    .where('username', username)
    .del()
}

function getWalks (db = connection) {
  return db('walks')
    .select()
    .then(walks => {
      let parsedWalks = walks.map(walk => parser(walk))
      return parsedWalks
    })
}

function getReviewRatings (db = connection) {
  return db('ratingReviews')
    .select()
}

function addReview (review, db = connection) {
  return db('ratingReviews')
    .insert(review)
}

function editReview (review, db = connection) {
  return db('ratingReviews')
    .where({
      walkId: review.walkId,
      username:  review.username
    })
    .update(review)
}

function deleteReview (review, db = connection) {
  console.log('object given to deleteReview function in route ', review)
  return db('ratingReviews')
    .where({
      walkId: review.walkId,
      username:  review.username
    })
    .del()
    .then(res => console.log('response from deleting review in db function ', res))
}

function parser (photosArray) {
  let parsedPhotos = JSON.parse(photosArray.photos)
  photosArray.photos = parsedPhotos
  return photosArray
}
