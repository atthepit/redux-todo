import test from 'tape'
import { increment, decrement } from '../../src/actions/counter'
import { INCREMENT, DECREMENT } from '../../src/reducers/counter'

test('Increment action', (assert) => {
  const action = {
    type: INCREMENT,
  }

  assert.deepEqual(
    increment(),
    action
  )

  assert.end()
})

test('Decrement action', (assert) => {
  const action = {
    type: DECREMENT,
  }

  assert.deepEqual(
    decrement(),
    action
  )

  assert.end()
})
