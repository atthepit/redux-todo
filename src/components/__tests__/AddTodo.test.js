import React from 'react'
import AddTodo from '../AddTodo'
import renderer from 'react-test-renderer'

describe(`Test AddTodo component`, () => {

  it(`should render correctly`, () => {
    const props = {
      addTodo: jest.fn(),
    }
    const tree = renderer.create(
      <AddTodo { ...props } />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
