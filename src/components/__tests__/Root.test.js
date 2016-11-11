import React from 'react'
import Root from '../Root'
import renderer from 'react-test-renderer'

describe('Test Root component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Root />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
