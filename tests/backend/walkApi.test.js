const request = require('supertest')

jest.mock('../../server/db/db', () => ({
  getWalks: () => Promise.resolve([
    {
      id: 1,
      title: 'test 1',
      latitude: 1,
      longitude: 10,
      location: 'testLocation1',
      mainPhoto: 'https://pictureData',
      photos: JSON.stringify([
        'https://test1.jpg',
        'https://test2.jpg',
        'https://test3.jpg',
        'https://test4.jpg'
      ]),
      routeImage: 'http://testRouteImage.jpg',
      distance: '1Kms',
      elevationGain: 200,
      timeTaken: '2 Hours',
      difficulty: 'Intermediate',
      Surface: 'There are numerous stream crossings',
      description: 'Test description'
    },
    { id: 2,
      title: 'test 2',
      latitude: 2,
      longitude: 12.14,
      location: 'testLocation2',
      mainPhoto: 'https:/picturedata2.jpg',
      photos: JSON.stringify([
        'https://1.jpg',
        'https://2',
        'https://3.jpg',
        'https://4'
      ]),
      routeImage: 'http://testRouteImage.jpg2',
      distance: '1.80Kms',
      elevationGain: 9999,
      timeTaken: '30 Minutes',
      difficulty: 'beginner',
      Surface: 'Concrete foot path and large grass lawns to walk around on',
      description: 'Test description 2'
    }
  ])
})
)

const server = require('../../server/server')

test('test that getWalks returns array with correct length and details', () => {
  return request(server)
    .get('/api/v1/walks')
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(2)
      expect(res.body[0]).toHaveProperty('id', 1)
    })
    .catch(err => expect(err).toBeNull())
})
