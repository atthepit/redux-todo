import React from 'react'
import { v4 } from 'uuid'

const AddTodo = ({ addTodo }) => {
  let textInput = undefined
  const onSubmit = (event) => {
    event.preventDefault()
    if (textInput == null)
      return

    const id = v4()
    const text = textInput.value
    addTodo(id, text)
    textInput.value = ``
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        ref={ (ref) => textInput = ref }
        type="text" />
      <button type="submit">{ `Add` }</button>
    </form>
  )
}

AddTodo.prototype.propTypes = {
  addTodo: React.PropTypes.func,
}

export default AddTodo
