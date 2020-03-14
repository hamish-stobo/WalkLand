import request from 'superagent'

export const GETWALKS = 'GETWALKS'
export const RECEIVEWALKS = 'RECEIVEWALKS'
export const RECEIVERATING = 'RECEIVERATING'

export const receiveWalks = (walks) => {
  return {
    type: RECEIVEWALKS,
    walks
  }
}

export const receiveRating = (ratings) => {
  return {
    type: RECEIVERATING,
    ratings
  }
}

export function fetchWalks () {
  return (dispatch) => {
    return request
      .get('/api/v1/walks')
      .then(res => {
        dispatch(receiveWalks(res.body))
      })
  }
}

export function getReviewRatings () {
  return (dispatch) => {
    return request
      .get('/api/v1/rating/')
      .then(res =>
        dispatch(receiveRating(res.body))
      )
  }
}
