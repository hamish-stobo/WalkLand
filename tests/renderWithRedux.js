import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

import combineReducers from '../client/components/reducers/index'
import { render } from '@testing-library/react'

function renderWithRedux (
  ui,
  { initialState, store = createStore(combineReducers, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),

    store
  }
}

export default renderWithRedux
