const testEnv = require('./test-environment')
const db = require('../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('expect getUsers to gets all 3 users', () => {
  return db.getUsers(testDb)
    .then(users => {
      expect(users.length).toBe(3)
    })
})

test('expect findUser to return one specific object', () => {
  const testUser = 'testEmail1.com'
  return db.findUser(testUser, testDb)
    .then(user => {
      expect(user.username).toEqual(testUser)
      expect(typeof user).toBe('object')
    })
})

// .insert returns the id of the new element
test('expect registerUser to add a 4th entry into the database', () => {
  const user = { username: 'testEmail4.com', password: 7 }
  return db.registerUser(user, testDb)
    .then(result => {
      expect(result[0]).toEqual(4)
    })
})
// .del returns 1 for success delete
test('expect deleteUser to successfully delete a entry in the database', () => {
  const testUser = 'testEmail1.com'
  return db.deleteUser(testUser, testDb)
    .then(result => {
      expect(result).toEqual(1)
    })
})

test('expect getWalks to successfully return all data from database and check Id', () => {
  return db.getWalks(testDb)
    .then(walks => {
      expect(walks.length).toEqual(3)
      expect(walks.map(x => x.id)).toEqual([1, 2, 3])
    })
})

test('expect getReviewRatings to return all data from database and check Id', () => {
  return db.getReviewRatings(testDb)
    .then(reviews => {
      expect(reviews.length).toEqual(3)
      expect(reviews.map(x => x.id)).toEqual([1, 2, 3])
    })
})

test('expect addReview to return a 4th id', () => {
  const testReview = { walkId: 3, username: 'testEmail7.com', rating: 2, review: 'walk was cool' }
  return db.addReview(testReview, testDb)
    .then(response => {
      expect(response[0]).toEqual(4)
    })
})
