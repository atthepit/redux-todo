import React from 'react'

const Todo = ({ todo, onClick }) => {
  const active = { textDecoration: todo.complete ? 'line-through' : 'none' }
  return (
    <li onClick={ onClick } style={ active }>
      { todo.text }
    </li>
  )
}

Todo.prototype.propTypes = {
  todo: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string,
    complete: React.PropTypes.bool,
  }).isRequired,
  onClick: React.PropTypes.func.isRequired,
}

export default Todo
