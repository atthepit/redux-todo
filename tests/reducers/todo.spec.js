import test from 'tape'
import todo, { ADD_TODO, TOGGLE_TODO } from '../../src/reducers/todo'

test('Test default state', (assert) => {
  const previousState = undefined
  const action = {
    type: 'JIBBERISH',
  }
  const nextState = {}

  assert.deepEqual(
    todo(previousState, action),
    nextState
  )

  assert.end()
})

test('Test add todo', (assert) => {
  const previousState = undefined
  const action = {
    type: ADD_TODO,
    id: 0,
    text: 'Hello world',
  }
  const nextState = {
    id: 0,
    text: 'Hello world',
    complete: false,
  }

  assert.deepEqual(
    todo(previousState, action),
    nextState
  )

  assert.end()
})

test('Test toggle todo', (assert) => {
  const previousState = {
    id: 0,
    text: 'Hello world',
    complete: false,
  }
  const action = {
    type: TOGGLE_TODO,
    id: 0,
  }
  const nextState = {
    id: 0,
    text: 'Hello world',
    complete: true,
  }

  assert.deepEqual(
    todo(previousState, action),
    nextState
  )

  assert.end()
})

test('Test toggle another todo', (assert) => {
  const previousState = {
    id: 0,
    text: 'Hello world',
    complete: false,
  }
  const action = {
    type: TOGGLE_TODO,
    id: 1,
  }
  const nextState = {
    id: 0,
    text: 'Hello world',
    complete: false,
  }

  assert.deepEqual(
    todo(previousState, action),
    nextState
  )

  assert.end()
})
