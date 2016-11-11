import React from 'react'
import Todo from '../Todo'
import renderer from 'react-test-renderer'

describe('Test Todo component', () => {
  it('renders correctly', () =>{
    const props = {
      todo: { id: 0, text: 'Hello world', complete: false },
      onClick: jest.fn(),
    }

    const tree = renderer.create(
      <Todo { ...props } />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
