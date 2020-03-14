import { RECEIVEWALKS } from '../actions/allWalks.js'

const allWalks = (state = [], action) => {
  switch (action.type) {
    case RECEIVEWALKS:
      return action.walks
    default:
      return state
  }
}

export default allWalks
