export const ADD_TODO = `ADD_TODO`
export const TOGGLE_TODO = `TOGGLE_TODO`

function todo(state = {}, action) {
  switch (action.type) {
  case ADD_TODO:
    return {
      id: action.id,
      text: action.text,
      complete: false,
    }
  case TOGGLE_TODO:
    if (action.id !== state.id)
      return state

    return {
      ...state,
      complete: !state.complete,
    }
  default:
    return state
  }
}

export default todo
