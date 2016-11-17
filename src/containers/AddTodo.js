 import { connect } from 'react-redux'
 import { v4 } from 'uuid'
 import { addTodo } from '../actions/todo'
 import AddTodo from '../components/AddTodo'

 const mapDispatchToProps = (dispatch) => ({
   addTodo: (text) => dispatch(addTodo(v4(), text)),
 })

 export default connect(
   null,
   mapDispatchToProps
 )(AddTodo)
