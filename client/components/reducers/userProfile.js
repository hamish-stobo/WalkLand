import { RECEIVE_PROFILE_INFO } from '../actions/userProfile'

function userProfiles (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PROFILE_INFO:
      return action.profileInfo
    default:
      return state
  }
}

export default userProfiles
