import React from 'react'

const Todo = ({ todo, onClick }) => {
  const active = { textDecoration: todo.complete ? 'line-through' : 'none' }
  return (
    <div onClick={ () => onClick(todo.id) } style={ active }>
      { todo.text }
    </div>
  )
}

Todo.prototype.propTypes = {
  todo: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string,
    complete: React.PropTypes.bool,
  }).isRequired,
  onClick: React.PropTypes.func,
}

export default Todo
