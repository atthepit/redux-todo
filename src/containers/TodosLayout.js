import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todo'
import Todos from '../components/Todos'
import { getVisibleTodos } from '../reducers'

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state),
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
