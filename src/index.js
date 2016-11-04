import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './components/Root'

const rootEl = document.getElementById('root')
render(
  <Root />,
  rootEl
)

// If hot loader is enabled, enable it on the whole root component
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Root /> here rather than require() a <NextRoot />.
    const NextRoot = require('./components/Root').default
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      rootEl
    )
  })
}
