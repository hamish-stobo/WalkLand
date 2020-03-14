export const SETERROR = 'ERROR'

export const setError = message => {
  return {
    type: SETERROR,
    message
  }
}
