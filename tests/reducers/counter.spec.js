import test from 'tape'
import counter from '../../src/reducers/counter'

test('Test undefined action', (assert) => {
  const previousState = undefined
  const action = {
    type: 'JIBBERISH',
  }
  const nextState = 0

  assert.deepEqual(
        counter(previousState, action),
        nextState
    )

  assert.end()
})

test('Test increment counter', (assert) => {
  const previousState = 0
  const action = {
    type: 'INCREMENT',
  }
  const nextState = 1

  assert.deepEqual(
        counter(previousState, action),
        nextState
    )

  assert.end()
})

test('Test decrement counter', (assert) => {
  const previousState = 1
  const action = {
    type: 'DECREMENT',
  }
  const nextState = 0

  assert.deepEqual(
        counter(previousState, action),
        nextState
    )

  assert.end()
})
