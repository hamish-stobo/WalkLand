import request from 'superagent'
import { setError } from '../actions/setError'
import { fetchProfileInfo } from './userProfile'
import { getReviewRatings } from './allWalks'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const DELETE_USER = 'DELETE_USER'

const loginUser = (username, avatarImage) => {
  return {
    type: LOGIN,
    username,
    avatarImage
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT
  }
}

export const deleteUser = () => {
  return {
    type: DELETE_USER
  }
} 

export function registerUserAndLogin (user) {
  return (dispatch) => {
    return request
      .post('/api/v1/auth/registerUser')
      .send(user)
      .then(data => {
        if (data.message) {
          console.log(data.message)
          console.log('before login in register thunk function ', data.message)
          dispatch(setError(data.message))
          dispatch(loginUser(res.req._data.username))
        } else {
          return request.post('/api/v1/auth/loginUser')
            .send({ username: user.username, password: user.password })
            .then(res => {
              localStorage.setItem('token', res.body.token)
              dispatch(loginUser(res.req._data.username, res.body.avatarImage))
              dispatch(fetchProfileInfo(res.req._data.username))
            })
        }
      })
      .catch(err => {
        dispatch(setError(err.message))
        throw err
      })
  }
}

export function justLogin (user) {
  return (dispatch) => {
    return request.post('/api/v1/auth/loginUser')
      .send({ username: user.username, password: user.password })
      .then(res => {
        if (res.message) {
          console.log(res.message)
          dispatch(setError(res.message))
        } else {
          localStorage.setItem('token', res.body.token)
          dispatch(loginUser(res.req._data.username, res.body.avatarImage))
          dispatch(fetchProfileInfo(res.req._data.username))
        }
      })
      .catch(err => {
        dispatch(setError(err.message))
        throw err
      })
  }
}

export function editProfile (userObject) {
  return dispatch => {
    return request.post('/api/v1/auth/editUser')
      .set('authorization', `bearer ${localStorage.token}`)
      .send(userObject)
      .then(() => 
        dispatch(fetchProfileInfo(userObject.username))
      )
      .catch(err => {
          dispatch(setError(err.message))
          throw err
      }
      )
  }
}

export function deleteProfile (username) {
  return (dispatch) => {
    return request
      .delete(`/api/v1/auth/deleteUser/${username}`)
      .set('authorization', `bearer ${localStorage.token}`)
      .then(res => {
        dispatch(deleteUser())
        dispatch(getReviewRatings())
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}
