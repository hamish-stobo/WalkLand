export const SELECTEDWALK = 'SELECTEDWALK'

const selectedWalk = (selectedWalk, allWalks) => {
  return {
    type: SELECTEDWALK,
    selectedWalk,
    allWalks
  }
}

export default selectedWalk
