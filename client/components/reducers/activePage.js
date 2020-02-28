export const NAVIGATE = 'NAVIGATE'

const activePage = (state = 'landingPage', action, id) => {
  switch (action.type) {
    case NAVIGATE:
      return action.destination
    default:
      return state
  }
}

export default activePage
