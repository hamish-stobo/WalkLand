import request from 'superagent'
import { getReviewRatings } from './allWalks'

export function createReview (review) {
  return (dispatch) => {
    return request
      .post('http://localhost:3000/api/v1/rating')
      .send(review)
      .then(res => {
        if (res.message) {
          console.log('res from review Walksaction: ', res)
        } else {
          dispatch(getReviewRatings())
        }
      })
  }
}

export function editReview (review) {
  return dispatch => {
    return request
    .post(`http://localhost:3000/api/v1/rating/edit`)
    .send(review)
    .then(res => {
      if (res.message) {
        console.log('res from review Walksaction: ', res)
      } else {
        dispatch(getReviewRatings())
      }
    })
  }
}

export function deleteReview (review) {
  return dispatch => {
    return request
    .delete(`http://localhost:3000/api/v1/rating`)
    .send(review)
    .then(res => {
      if (res.message) {
        console.log('res from delete in reviewWalks action: ', res)
      } else {
        dispatch(getReviewRatings())
      }
    })
    .catch(err => {
      throw err
    })
  }
}
