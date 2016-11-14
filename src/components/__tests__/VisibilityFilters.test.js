import React from 'react'
import VisibilityFilters from '../VisibilityFilters'
import renderer from 'react-test-renderer'

describe(`VisibilityFilters component`, () => {
  it(`renders correctly`, () =>{
    const props = {
      onClick: jest.fn(),
    }

    const tree = renderer.create(
      <VisibilityFilters { ...props } />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
