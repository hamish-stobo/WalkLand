import request from 'superagent'
import { getReviewRatings } from './allWalks'

export function createReview (review) {
  return (dispatch) => {
    return request
      .post('/api/v1/rating')
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
    .post('/api/v1/rating/edit')
    .set('authorization', `bearer ${localStorage.token}`)
    .send(review)
    .then(res => {
      if (res.message) {
        console.log('res from edit review Walksaction: ', res)
      } else {
        dispatch(getReviewRatings())
      }
    })
  }
}

export function deleteReview (review) {
  return dispatch => {
    return request
    .delete('/api/v1/rating')
    .set('authorization', `bearer ${localStorage.token}`)
    .send(review)
    .then(res => {
      if (res.message) {
        console.log('res from delete in reviewWalks action: ', res)
      } else {
        dispatch(getReviewRatings())
        return 'Review deleted!'
      }
    })
    .catch(err => {
      throw err
    })
  }
}
