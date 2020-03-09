import React from 'react'
import renderWithRedux from '../tests/renderWithRedux'
import { fireEvent } from '@testing-library/react'
import LandingPage, { Landing } from '../client/components/LandingPage'

import '@testing-library/jest-dom/extend-expect'
import '@babel/polyfill'

test('loads and displays WalkLand image ', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const title = getByTestId('image')
  expect(title).toHaveAttribute('src')
  expect(title).toBeInTheDocument()
})

test('User can see button with correct text ', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const button = getByTestId('startButton')
  expect(button).toHaveTextContent('START JOURNEY')
  expect(button).toBeInTheDocument()
})

test('User can interact with button', async () => {
  const mockOnClick = jest.fn()
  const { getByTestId } = renderWithRedux(<Landing activePage= {mockOnClick} />)
  fireEvent.click(getByTestId('startButton'))
  expect(mockOnClick).toHaveBeenCalledTimes(1)
})

test('button has classname ', async () => {
  const { getByTestId } = renderWithRedux(<LandingPage />)
  const startbutton = getByTestId('startButton')
  expect(startbutton).toHaveClass('btn')
})
