import * as actions from '../visibility-filter'

describe(`Visibility filter action creators`, () => {
  test(`set visibility filter`, () => {
    const filter = `SHOW_ALL`

    expect(
      actions.setVisibilityFilter(filter)
    ).toEqual({
      type: `SET_VISIBILITY_FILTER`,
      filter,
    })
  })
})
