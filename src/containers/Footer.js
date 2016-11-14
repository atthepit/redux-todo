import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/visibility-filter'
import VisibilityFilters from '../components/VisibilityFilters'

const mapDispatchToProps = (dispatch) => ({
  onClick: (filter) => dispatch(setVisibilityFilter(filter)),
})

export default connect(
  null,
  mapDispatchToProps
)(VisibilityFilters)
