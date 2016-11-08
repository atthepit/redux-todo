import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todo'
import Todo from './Todo'

const mapStateToProps = (state) => ({
  todo: state,
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(toggleTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
