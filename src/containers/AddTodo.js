 import { connect } from 'react-redux'
 import { addTodo } from '../actions/todo'
 import AddTodo from '../components/AddTodo'

 const mapDispatchToProps = (dispatch) => ({
   addTodo: (id, text) => dispatch(addTodo(id, text)),
 })

 export default connect(
   null,
   mapDispatchToProps
 )(AddTodo)
