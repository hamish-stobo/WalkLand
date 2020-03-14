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
    return db('ratingReviews')
    .where('username', username)
    .del()
    .then(() => {
      return db('users')
      .where('username', username)
      .del()
    })
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
  console.log('review given to pg for insert ', review)
  return db('ratingReviews')
  .max('id')
  .then(res => {
    const obj = res[0]
    let id = 0
    for(const prop in obj) {
      console.log('id from insert', obj[prop])
      id = obj[prop] + 1
    }
    return db('ratingReviews')
    .insert({id, walkId: review.walkId, username: review.username, rating: review.rating, review: review.review})
    .then(res => console.log(res))
    .catch(err => console.log ('error from pg ', err))
  })
  
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
  return db('ratingReviews')
    .where({
      walkId: review.walkId,
      username:  review.username
    })
    .del()
}

function parser (photosArray) {
  let parsedPhotos = JSON.parse(photosArray.photos)
  photosArray.photos = parsedPhotos
  return photosArray
}
