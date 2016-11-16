import { applyMiddleware, createStore } from 'redux'
import root from '../reducers/'

const middlewares = []

// Due to problems with Windows environments, environment is default to 'development'
const environment = process.env.NODE_ENV || `development`
if (environment === `development`) {
  const createLogger = require(`redux-logger`)
  const logger = createLogger()
  middlewares.push(logger)
}

const initialState = {
  todos: [
    { id: 0, text: `Hello world`, complete: false },
    { id: 1, text: `Hello world 2`, complete: true },
  ],
  visibilityFilter: `SHOW_ALL`,
}

export default createStore.bind(
  null,
  root,
  initialState,
  applyMiddleware(...middlewares)
)
