import { LOGIN, LOGOUT, DELETE_USER } from '../actions/authActions'

const auth = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {username: action.username, avatarImage: action.avatarImage}
    case LOGOUT:
      return ''
    case DELETE_USER:
      return ''
    default:
      return state
  }
}

export default auth
