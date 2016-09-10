import React, { PropTypes } from 'react'

const HelloWorld = ({ __setHelloMessage, message }) => {
  const onClick = () => { __setHelloMessage({ message: 'World!' }) }
  return (
    <div>
      <p>HelloWorld 'message' props: <code>{ message }</code></p>
      <button onClick={onClick}>Click</button>
    </div>
  )
}
HelloWorld.displayName = 'HelloWorld'
HelloWorld.propTypes = {
  __setHelloMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default HelloWorld
