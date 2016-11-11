import React from 'react'
import Counter from '../Counter'
import renderer from 'react-test-renderer'

describe('Test Counter component', () => {
  it('renders correctly', () => {
    const count = 0
    const increment = jest.fn
    const decrement = jest.fn

    const props = {
      count,
      increment,
      decrement,
    }

    const tree = renderer.create(
      <Counter { ...props } />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
