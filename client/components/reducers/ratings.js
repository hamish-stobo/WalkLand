import { RECEIVERATING } from '../actions/allWalks.js'

const ratings = (state = [], action) => {
  switch (action.type) {
    case RECEIVERATING:
      return action.ratings
    default:
      return state
  }
}

export default ratings
