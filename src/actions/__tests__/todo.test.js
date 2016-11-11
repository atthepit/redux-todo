import * as actions from '../todo'

describe('Todo action creators', () => {
  test('Add todo', () => {
    const id = 0
    const text = 'Hello world'

    expect(
      actions.addTodo(id, text)
    ).toMatchSnapshot()
  })

  test('Toggle todo', () => {
    const id = 0

    expect(
      actions.toggleTodo(id)
    ).toMatchSnapshot()
  })

})
