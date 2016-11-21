import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todo'
import Todos from '../components/Todos'
import { getVisibleTodos } from '../reducers/todos'

const mapStateToProps = (state, { filter }) => ({
  todos: getVisibleTodos(state, filter),
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
