import React, { PropTypes } from 'react'

const Repo = (props) => (
  <h2>{props.params.repoName}</h2>
)
Repo.displayName = 'Repo'
Repo.propTypes = {
  params: PropTypes.shape({
    repoName: PropTypes.string.isRequired
  }).isRequired
}
export default Repo
