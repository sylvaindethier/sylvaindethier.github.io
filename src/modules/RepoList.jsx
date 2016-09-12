import React, { PropTypes } from 'react'
import NavLink from './NavLink'

const RepoList = ({ children, params: { locale } }) => (
  <div>
    <h2>Repo list</h2>

    <ul>
      <li><NavLink to={`/${locale}/repos/reactjs/react-router`}>React Router</NavLink></li>
      <li><NavLink to={`/${locale}/repos/facebook/react`}>React</NavLink></li>
    </ul>
    {children}
  </div>
)
RepoList.displayName = 'RepoList'
RepoList.propTypes = {
  children: PropTypes.element,
  params: PropTypes.shape({ locale: PropTypes.string.isRequired })
}
export default RepoList
