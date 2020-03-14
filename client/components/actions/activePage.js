export const NAVIGATE = 'NAVIGATE'

const activePage = (destination, id) => {
  return {
    type: NAVIGATE,
    destination,
    id
  }
}

export default activePage
