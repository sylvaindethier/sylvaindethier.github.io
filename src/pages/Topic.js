import React, { PropTypes } from 'react'

const Topic = ({ params }) => {
  console.log('render Topic w/', {params}) // eslint-disable-line
  return (
    // 9. the dynamic segments of a `pattern` (in this case `:topicId`)
    //    are parsed and sent to the component from `Match`.
    <div>
      <h3>{params.topicId}</h3>
    </div>
  )
}

Topic.propTypes = {
  params: PropTypes.shape({
    topicId: PropTypes.string.isRequired
  }).isRequired
}

export default Topic
