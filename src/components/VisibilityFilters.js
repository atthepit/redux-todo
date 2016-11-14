import React from 'react'

const VisibilityFilters = ({ onClick }) =>
  <div>
    <button onClick={ () => onClick(`SHOW_ALL`) } >{`Show All`}</button>
    <button onClick={ () => onClick(`SHOW_ACTIVE`) } >{`Active`}</button>
    <button onClick={ () => onClick(`SHOW_COMPLETED`) } >{`Completed`}</button>
  </div>

VisibilityFilters.propTypes = {
  onClick: React.PropTypes.func,
}

export default VisibilityFilters
