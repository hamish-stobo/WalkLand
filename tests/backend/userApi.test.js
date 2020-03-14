const request = require('supertest')

jest.mock('../../server/db/db', () => ({
  findUser: () => Promise.resolve([
    { id: 1, userId: 1, walkId: 1, username: 'Test_User1', rating: 1, review: 'amazing' }

  ])
})
)

const server = require('../../server/server')

test('test that get user request is being hit and returning data', () => {
  return request(server)
    .get('/api/v1/users/:username')
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(1)
      expect(res.body[0]).toHaveProperty('id', 1)
    })
    .catch(err => expect(err).toBeNull())
})
