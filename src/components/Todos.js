import React from 'react'
import Todo from './Todo'

const Todos = ({ onTodoClick, todos }) =>
  <ul>
    {todos.map(todo => <Todo key={ todo.id } onClick={ onTodoClick } todo={ todo } />)}
  </ul>

Todos.propTypes = {
  onTodoClick: React.PropTypes.func.isRequired,
  todos: React.PropTypes.array.isRequired,
}

export default Todos
