import React from 'react'
import { Provider } from 'react-redux'
import Root from '../Root'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const middlewares = []
let mockStore = undefined

beforeEach(() => {
  mockStore = configureStore(middlewares)
})


describe(`Test Root component`, () => {
  it(`renders correctly`, () => {
    const store = mockStore([
      { id: 0, text: `Hello world`, complete: false },
      { id: 1, text: `Hello world 2`, complete: true },
    ])
    const routerParams = {
      filter: `all`
    }

    const tree = renderer.create(
      <Provider store={ store }>
        <Root params={ routerParams } />
      </Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
