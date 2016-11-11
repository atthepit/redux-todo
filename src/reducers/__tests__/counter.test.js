import counter from '../counter'
import * as actions from '../../actions/counter'

describe('Counter reducer', () => {
  test('undefined action', () => {
    const previousState = undefined
    const action = {
      type: 'JIBBERISH',
    }

    expect(
      counter(previousState, action)
    ).toMatchSnapshot()
  })

  test('Test increment counter', () => {
    const previousState = 0
    const action = actions.increment()

    expect(
      counter(previousState, action)
    ).toMatchSnapshot()
  })

  test('Test decrement counter', () => {
    const previousState = 1
    const action = actions.decrement()

    expect(
      counter(previousState, action)
    ).toMatchSnapshot()
  })

})
