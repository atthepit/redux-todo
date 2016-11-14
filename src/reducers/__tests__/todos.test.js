import todos, { getVisibleTodos } from '../todos'
import * as actions from '../../actions/todo'

describe(`Test todos reducer`, () => {
  test(`add todo`, () => {
    const initialState = undefined
    const action = actions.addTodo(0, `Hi there!`)

    expect(
      todos(initialState, action)
    ).toMatchSnapshot()
  })

  test(`add another todo`, () => {
    const initialState = [
      { id: 0, text: `Hello world`, complete: false },
      { id: 1, text: `Hello!`, complete: true },
    ]
    const action = actions.addTodo(2, `Hi there!`)

    expect(
      todos(initialState, action)
    ).toMatchSnapshot()
  })

  test(`toggle todo`, () => {
    const initialState = [
      { id: 0, text: `Hello world`, complete: false },
      { id: 1, text: `Hello!`, complete: true },
    ]
    const action = actions.toggleTodo(1)

    expect(
      // Toggle to false
      todos(initialState, action)
    ).toMatchSnapshot()

    expect(
      // Toggle to true
      todos(initialState, action)
    ).toMatchSnapshot()
  })
})

describe(`Test getVisibleTodos`, () => {
  it(`should return all the todos`, () => {
    const state = [
      { id: 0, text: `Hello world`, complete: false },
      { id: 1, text: `Hello world 2`, complete: true },
    ]
    const filter = `SHOW_ALL`

    expect(
      getVisibleTodos(state, filter)
    ).toBe(state)
  })

  it(`should return only active todos`, () => {
    const state = [
      { id: 0, text: `Hello world`, complete: false },
      { id: 1, text: `Hello world 2`, complete: true },
    ]
    const filter = `SHOW_ACTIVE`

    expect(
      getVisibleTodos(state, filter)
    ).toEqual([
      { id: 0, text: `Hello world`, complete: false },
    ])
  })

  it(`should return only completed todos`, () => {
    const state = [
      { id: 0, text: `Hello world`, complete: false },
      { id: 1, text: `Hello world 2`, complete: true },
    ]
    const filter = `SHOW_COMPLETED`

    expect(
      getVisibleTodos(state, filter)
    ).toEqual([
      { id: 1, text: `Hello world 2`, complete: true },
    ])
  })
})
