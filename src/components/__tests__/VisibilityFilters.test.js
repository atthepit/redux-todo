import React from 'react'
import VisibilityFilters from '../VisibilityFilters'
import renderer from 'react-test-renderer'

describe(`VisibilityFilters component`, () => {
  it(`renders correctly`, () =>{
    const tree = renderer.create(
      <VisibilityFilters />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
