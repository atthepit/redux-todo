import test from 'tape'
import todos from '../../src/reducers/todos'
import * as actions from '../../src/reducers/todo'

test('Test todos reducer', (assert) => {
  const previousState = undefined
  const action = {
    type: 'JIBBERISH',
  }
  const nextState = []

  assert.deepEqual(
    todos(previousState, action),
    nextState
  )

  assert.end()
})

test('Test add todo to todos', (assert) => {
  const previousState = []
  const action = {
    type: actions.ADD_TODO,
    id: 0,
    text: 'Hello world',
  }
  const nextState = [{
    id: 0,
    text: 'Hello world',
    complete: false,
  }]

  assert.deepEqual(
    todos(previousState, action),
    nextState
  )

  assert.end()
})

test('Test add another todo to todos', (assert) => {
  const previousState = [{
    id: 0,
    text: 'Hello world',
    complete: false,
  }]
  const action = {
    type: actions.ADD_TODO,
    id: 1,
    text: 'ho!',
  }
  const nextState = [
    {
      id: 0,
      text: 'Hello world',
      complete: false,
    }, {
      id: 1,
      text: 'ho!',
      complete: false,
    },
  ]

  assert.deepEqual(
    todos(previousState, action),
    nextState
  )

  assert.end()
})

test('Toggle todo in todos', (assert) => {
  const previousState = [
    {
      id: 0,
      text: 'Hello world',
      complete: false,
    }, {
      id: 1,
      text: 'ho!',
      complete: false,
    },
  ]
  const action = {
    type: actions.TOGGLE_TODO,
    id: 1,
  }
  const nextState = [
    {
      id: 0,
      text: 'Hello world',
      complete: false,
    }, {
      id: 1,
      text: 'ho!',
      complete: true,
    },
  ]

  assert.deepEqual(
    todos(previousState, action),
    nextState
  )

  assert.end()
})
