import { VIEW_PROFILE } from '../actions/viewProfile'

function viewProfile (state = {}, action) {
  switch (action.type) {
    case VIEW_PROFILE:
      return {
        ...state,
        username: action.username,
        isViewing: action.isViewing
      }

    default:
      return state
  }
}

export default viewProfile
