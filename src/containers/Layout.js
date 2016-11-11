import { connect } from 'react-redux'

import { increment, decrement } from '../actions/counter'
import Counter from '../components/Counter'

const mapStateToProps = (state) => ({
  count: state,
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
