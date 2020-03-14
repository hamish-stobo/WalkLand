import { SETERROR } from '../actions/setError'

export function errorState (state = '', action) {
  switch (action.type) {
    case SETERROR:
      return action.message
    default:
      return state
  }
}

export default errorState
