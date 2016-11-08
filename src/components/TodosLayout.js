import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todo'
import Todos from './Todos'

const mapStateToProps = (state) => ({
  todos: state,
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
