import React from 'react'


const AddTodo = ({ addTodo }) => {
  let textInput = undefined
  const onSubmit = (event) => {
    event.preventDefault()
    if (textInput == null)
      return

    addTodo(textInput.value)
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
