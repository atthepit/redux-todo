import React from 'react'
import Todos from '../Todos'
import renderer from 'react-test-renderer'

describe(`Test Todos component`, () => {
  it(`renders correctly`, () =>{
    const onTodoClick = jest.fn()
    const todos = [
      { id: 0, text: `Hello world`, complete: false },
      { id: 1, text: `Hello!`, complete: true },
    ]
    const props = {
      onTodoClick,
      todos,
    }

    const tree = renderer.create(
      <Todos { ...props } />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
