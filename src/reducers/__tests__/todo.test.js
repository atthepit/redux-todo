import todo from '../todo'
import * as actions from '../../actions/todo'

describe(`Test todo reducer`, () => {
  test(`initial state`, () => {
    const initialState = undefined
    const action = {}

    expect(
      todo(initialState, action)
    ).toMatchSnapshot()
  })

  test(`add todo`, () => {
    const initialState = undefined
    const id = 0
    const text = `Hello world`
    const action = actions.addTodo(id, text)

    expect(
      todo(initialState, action)
    ).toMatchSnapshot()
  })

  test(`toggle todo`, () => {
    const initialState = {
      id: 0,
      text: `Hello world`,
      complete: false,
    }
    const id = 0
    const action = actions.toggleTodo(id)

    expect(
      todo(initialState, action)
    ).toMatchSnapshot()
  })

  test(`toggle 2 times todo`, () => {
    const initialState = {
      id: 0,
      text: `Hello world`,
      complete: false,
    }
    const id = 0
    const action = actions.toggleTodo(id)

    expect(
      // Toggle to true
      todo(initialState, action)
    ).toMatchSnapshot()

    expect(
      // Toggle to false again
      todo(initialState, action)
    ).toMatchSnapshot()
  })
})
