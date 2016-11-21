import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { Router, Route, hashHistory } from 'react-router'

import createStore from './store/'
import Root from './components/Root'

const rootEl = document.getElementById(`root`)
const store = createStore()

render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route component={ Root } path="/(:filter)" />
    </Router>
  </Provider>,
  rootEl
)

// If hot loader is enabled, enable it on the whole root component
if (module.hot) {
  module.hot.accept(`./components/Root`, () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Root /> here rather than require() a <NextRoot />.
    const NextRoot = require(`./components/Root`).default
    render(
      <AppContainer>
        <Provider store={ store }>
          <Router history={ hashHistory }>
            <Route component={ NextRoot } path="/(:filter)" />
          </Router>
        </Provider>
      </AppContainer>,
      rootEl
    )
  })
}
