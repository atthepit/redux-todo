import todo, * as actions from './todo'

function todos(state = [], action) {
  switch (action.type) {
  case actions.ADD_TODO:
    return [...state, todo(undefined, action)]
  case actions.TOGGLE_TODO:
    return state.map(t => todo(t, action))
  default:
    return state
  }
}

export default todos
export const getVisibleTodos = (state, filter) => {
  switch(filter) {
  case `active`:
    return state.filter(t => !t.complete)
  case `completed`:
    return state.filter(t => t.complete)
  default:
    return state
  }
}
