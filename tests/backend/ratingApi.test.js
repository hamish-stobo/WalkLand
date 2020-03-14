const request = require('supertest')

jest.mock('../../server/db/db', () => ({
  getReviewRatings: () => Promise.resolve([
    { id: 1, userId: 1, walkId: 1, username: 'Test_User1', rating: 1, review: 'amazing' },
    { id: 2, userId: 2, walkId: 2, username: 'Test_User2', rating: 2, review: 'yikes' },
    { id: 3, userId: 3, walkId: 3, username: 'Test_User3', rating: 3, review: 'cool' }

  ]),
  findUser: () => Promise.resolve([
    { id: 1, userId: 1, walkId: 1, username: 'Test_User1', rating: 1, review: 'amazing' }

  ]),
  addReview: () => Promise.resolve([
    1
  ])
})
)

const server = require('../../server/server')

test('test that rating get request is being hit and returns correct details', () => {
  return request(server)
    .get('/api/v1/rating')
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(3)
      expect(res.body[0]).toHaveProperty('id', 1)
    })
})

test('test that post request is being hit', () => {
  const data = {
    username: '',
    rating: 1,
    review: 'this was great',
    walkId: 1
  }
  return request(server)
    .post('/api/v1/rating', data)
    .set('Accept', /json/)
    .expect(200)
    .expect('Content-Type', /json/)
})
