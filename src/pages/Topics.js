import React from 'react'
import Link from 'react-router-dom/Link'
import Route from 'react-router-dom/Route'
import { match as matchPropTypes } from '../routerPropTypes'

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route path={match.url} exact render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

Topics.propTypes = {
  match: matchPropTypes.isRequired
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

Topic.propTypes = {
  match: matchPropTypes.isRequired
}

export default Topics
