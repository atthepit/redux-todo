import React from 'react'
import NavLink from './NavLink'

const VisibilityFilters = () =>
  <div>
    <NavLink to="/" >{`Show All`}</NavLink>
    <NavLink to="/active" >{`Active`}</NavLink>
    <NavLink to="/completed" >{`Completed`}</NavLink>
  </div>

export default VisibilityFilters
