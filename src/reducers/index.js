import { combineReducers } from 'redux'
import todos, * as todosFn from './todos'
import visibilityFilter from './visibility-filter'

const root = combineReducers({
  todos,
  visibilityFilter,
})

export default root
export const getVisibleTodos = (state) => todosFn.getVisibleTodos(state.todos, state.visibilityFilter)
