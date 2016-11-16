import { applyMiddleware, createStore } from 'redux'
import root from '../reducers/'

const middlewares = []

// Due to problems with Windows environments, environment is default to 'development'
const environment = process.env.NODE_ENV || 'development'
if (environment === 'development') {
  const createLogger = require('redux-logger')
  const logger = createLogger()
  middlewares.push(logger)
}

export default createStore.bind(
  null,
  root,
  applyMiddleware(...middlewares)
)
