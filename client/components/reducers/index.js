import { combineReducers } from 'redux'

import activePage from './activePage'
import selectedWalk from './selectedWalk'
import allWalks from './allWalks'
import ratings from './ratings'
import auth from './auth'
import viewProfile from './viewProfile'
import userProfiles from './userProfiles'
import errorState from './errorState'

export default combineReducers({
  activePage,
  selectedWalk,
  allWalks,
  ratings,
  auth,
  viewProfile,
  userProfiles,
  errorState
})
