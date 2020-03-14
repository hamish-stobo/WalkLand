import { VIEW_PROFILE } from '../actions/viewProfile'

function viewProfile (state = {}, action) {
  switch (action.type) {
    case VIEW_PROFILE:
      return action.username

    default:
      return state
  }
}

export default viewProfile
