export const SELECTEDWALK = 'SELECTEDWALK'

const selectedWalk = (state = {}, action) => {
  switch (action.type) {
    case SELECTEDWALK:
      return action.selectedWalk
    default:
      return state
  }
}

export default selectedWalk
