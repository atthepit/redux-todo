import test from 'tape'
import { addTodo, toggleTodo } from '../../src/actions/todo'
import { ADD_TODO, TOGGLE_TODO } from '../../src/reducers/todo'

test('Test add todo action creator', (assert) => {
  const action = {
    type: ADD_TODO,
    id: 0,
    text: 'Hello world',
  }

  assert.deepEqual(
    addTodo(0, 'Hello world'),
    action
  )

  assert.end()
})

test('Test toggle todo action creator', (assert) => {
  const action = {
    type: TOGGLE_TODO,
    id: 0,
  }

  assert.deepEqual(
    toggleTodo(0),
    action
  )

  assert.end()
})

