import visibilityFilter from '../visibility-filter'
import * as actions from '../../actions/visibility-filter'

describe(`Test visibilityFilter reducer`, () => {
  it(`default to SHOW_ALL`, () =>{
    const initialState = undefined
    const action = {}

    expect(
      visibilityFilter(initialState, action)
    ).toEqual(`SHOW_ALL`)
  })

  test(`set visibility filter`, () => {
    const initialState = undefined
    const filter = `SHOW_ACTIVE`
    const action = actions.setVisibilityFilter(filter)

    expect(
      visibilityFilter(initialState, action)
    ).toEqual(filter)
  })
})
