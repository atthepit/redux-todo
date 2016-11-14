import { getVisibleTodos } from '../'

describe(`Test getVisibleTodos`, () => {
  it(`should return all the todos`, () => {
    const filter = `SHOW_ALL`
    const state = {
      todos: [
        { id: 0, text: `Hello world`, complete: false },
        { id: 1, text: `Hello world 2`, complete: true },
      ],
      visibilityFilter: filter,
    }

    expect(
      getVisibleTodos(state)
    ).toEqual(state.todos)
  })

  it(`should return only active todos`, () => {
    const filter = `SHOW_ACTIVE`
    const state = {
      todos: [
        { id: 0, text: `Hello world`, complete: false },
        { id: 1, text: `Hello world 2`, complete: true },
      ],
      visibilityFilter: filter,
    }

    expect(
      getVisibleTodos(state)
    ).toEqual([
      { id: 0, text: `Hello world`, complete: false },
    ])
  })

  it(`should return only completed todos`, () => {
    const filter = `SHOW_COMPLETED`
    const state = {
      todos: [
        { id: 0, text: `Hello world`, complete: false },
        { id: 1, text: `Hello world 2`, complete: true },
      ],
      visibilityFilter: filter,
    }

    expect(
      getVisibleTodos(state)
    ).toEqual([
      { id: 1, text: `Hello world 2`, complete: true },
    ])
  })
})
