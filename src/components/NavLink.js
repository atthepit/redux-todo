import React from 'react'
import { Link } from 'react-router'

const activeStyle = {
  color: `red`,
}

const NavLink = (props) =>
  <Link { ...props } activeStyle={ activeStyle } />

export default NavLink
