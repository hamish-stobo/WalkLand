import React from 'react'
import renderWithRedux from '../tests/renderWithRedux'
import  { DisplayMap as Map } from '../client/components/DisplayMap'

const mockData = [{
  id: 1,
  title: 'Goldie\'s Bushwalk',
  latitude: -36.845928,
  longitude: 174.474207,
  location: 'Muriwai',
  mainPhoto: 'https://cdn-assets.alltrails.com/uploads/photo/image/18238463/extra_large_402813450dbfc0f7a66096692f0f543c.jpg',
  photos: JSON.stringify([
    'https://cdn-assets.alltrails.com/uploads/photo/image/18238463/extra_large_402813450dbfc0f7a66096692f0f543c.jpg',
    'https://cdn-assets.alltrails.com/uploads/photo/image/22578955/extra_large_074a071686927417546e8646bff479ed.jpg',
    'https://cdn-assets.alltrails.com/uploads/photo/image/21824864/extra_large_f1eb12e2bbed6d49dff05753dcf6d83c.jpg',
    'https://cdn-assets.alltrails.com/uploads/photo/image/25533958/extra_large_ef609dc231603d2ecdfac3e4a30beefe.jpg'
  ]),
  routeImage: 'http://i.imgur.com/tudbIvd.jpg',
  distance: '4.5Kms',
  elevationGain: 200,
  timeTaken: '2 Hours',
  difficulty: 'Intermediate',
  Surface: 'There are numerous stream crossings',
  description: 'Goldies Bush and Mokoroa Falls Loop is a 6.0 kilometer lightly trafficked loop trail located near Auckland, Auckland, New Zealand that features a waterfall and is rated as moderate. The trail is primarily used for hiking, walking, and nature trips.'
}]

const google = {
  maps: {
    Animation: {},
    places: {
      
      AutocompleteService: () => {},
      PlacesServiceStatus: {
        INVALID_REQUEST: 'INVALID_REQUEST',
        NOT_FOUND: 'NOT_FOUND',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS',
      },
    },
    Geocoder: () => {},
    GeocoderStatus: {
      ERROR: 'ERROR',
      INVALID_REQUEST: 'INVALID_REQUEST',
      OK: 'OK',
      OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
      REQUEST_DENIED: 'REQUEST_DENIED',
      UNKNOWN_ERROR: 'UNKNOWN_ERROR',
      ZERO_RESULTS: 'ZERO_RESULTS',
    },
  },
}
global.window.google = google


test('Map component is in the component', async () => {
  const { getByTestId } = renderWithRedux(
    <Map 
    allWalksState={mockData}
    selectedWalkState={mockData}
    Animation={google}
    />)
  const loadMap = getByTestId('loadMap')
  expect(loadMap).toBeInTheDocument()
  expect(loadMap).toBeVisible()
})