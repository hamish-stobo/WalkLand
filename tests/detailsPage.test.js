import React from 'react'
import './setup'
import renderWithRedux from '../tests/renderWithRedux'
import Details from '../client/components/Details'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

const mockData = [{
  id: 1,
  title: 'Goldie\'s Bushwalk',
  latitude: -36.845928,
  longitude: 174.474207,
  location: 'Muriwai',
  mainPhoto: 'https://cdn-assets.alltrails.com/uploads/photo/image/18238463/extra_large_402813450dbfc0f7a66096692f0f543c.jpg',
  photos: [
    'https://cdn-assets.alltrails.com/uploads/photo/image/18238463/extra_large_402813450dbfc0f7a66096692f0f543c.jpg',
    'https://cdn-assets.alltrails.com/uploads/photo/image/22578955/extra_large_074a071686927417546e8646bff479ed.jpg',
    'https://cdn-assets.alltrails.com/uploads/photo/image/21824864/extra_large_f1eb12e2bbed6d49dff05753dcf6d83c.jpg',
    'https://cdn-assets.alltrails.com/uploads/photo/image/25533958/extra_large_ef609dc231603d2ecdfac3e4a30beefe.jpg'
  ],
  routeImage: 'http://i.imgur.com/tudbIvd.jpg',
  distance: '4.5Kms',
  elevationGain: 200,
  timeTaken: '2 Hours',
  difficulty: 'Intermediate',
  Surface: 'There are numerous stream crossings',
  description: 'Goldies Bush and Mokoroa Falls Loop is a 6.0 kilometer lightly trafficked loop trail located near Auckland, Auckland, New Zealand that features a waterfall and is rated as moderate. The trail is primarily used for hiking, walking, and nature trips.'
}]

test('loads and displays WalkLand ', () => {
  const { queryByTestId } = renderWithRedux(<Details selectedWalk={mockData}  />)
  const details = queryByTestId('detailsTitle')
  expect(details).toHaveClass('details-content')
  expect(details).toBeTruthy()
})

test('Loads and displays description ', () => {
  const { getByTestId } = renderWithRedux(<Details selectedWalk={mockData}  />)
  const routeImage = getByTestId('image')
  expect(routeImage).toHaveClass('details-map')
  expect(routeImage).toHaveAttribute('height')
  expect(routeImage).toHaveAttribute('width')
  expect(routeImage).toBeInTheDocument()
  expect(routeImage).toBeTruthy()
})


test('user can see slider ', () => {
  const { getByTestId } = renderWithRedux(<Details selectedWalk={mockData}  />)
  const description = getByTestId('slider')
  expect(description).toBeInTheDocument()
  expect(description).toBeTruthy()
})

test('User can see description ', () => {
  const { getByTestId } = renderWithRedux(<Details selectedWalk={mockData}  />)
  const description = getByTestId('description')
  expect(description).toBeInTheDocument()
  expect(description).toBeTruthy()
})

test('User can see details ', () => {
  const { getByTestId } = renderWithRedux(<Details selectedWalk={mockData}  />)
  const description = getByTestId('ul')
  expect(description).toHaveClass('details-info')
  expect(description).toBeInTheDocument()
  expect(description).toBeTruthy()

})

test('use can see image ', () => {
  const { getByTestId } = renderWithRedux(<Details selectedWalk={mockData}  />)
  const description = getByTestId('grid')
  expect(description).toHaveClass('hamish-reviews-grid')
  expect(description).toBeInTheDocument()
  expect(description).toBeTruthy()
})

test('User can see reviews', () => {
  const { getByTestId } = renderWithRedux(<Details selectedWalk={mockData}  />)
  const description = getByTestId('review')
  expect(description).toHaveTextContent('No reviews yet')
  expect(description).toBeInTheDocument()
  expect(description).toBeTruthy()
})

