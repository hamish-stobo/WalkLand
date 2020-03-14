import request from 'superagent'

export const RECEIVE_PROFILE_INFO = 'RECEIVE_PROFILE_INFO'

export const receiveProfileInfo = profileInfo => {
  return {
    type: RECEIVE_PROFILE_INFO,
    profileInfo
  }
}

export function fetchProfileInfo (user) {
  return dispatch => {
    return request
      .get(`/api/v1/users/${user}`)
      .then(res => {
        dispatch(receiveProfileInfo(res.body))
      })
      .catch(err => {
        console.log(err)
        dispatch(receiveProfileInfo('error'))
      })
  }
}
