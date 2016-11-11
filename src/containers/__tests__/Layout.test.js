import React from 'react'
import Layout from '../Layout'
import renderer from 'react-test-renderer'

describe('Test Layout component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Layout />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
