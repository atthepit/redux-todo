import * as actions from '../counter'

describe('Counter action creators', () => {
  test('increment', () => {
    expect(
      actions.increment()
    ).toMatchSnapshot()
  })

  test('decrement', () => {
    expect(
      actions.decrement()
    ).toMatchSnapshot()
  })
})
