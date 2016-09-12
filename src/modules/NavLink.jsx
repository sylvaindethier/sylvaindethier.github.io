import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const NavLink = (props) => (
  <Link activeStyle={{ color: 'green' }} {...props}>{props.children}</Link>
)
NavLink.displayName = 'NavLink'
NavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

export default NavLink
