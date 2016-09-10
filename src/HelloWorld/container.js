import { connect } from 'react-redux'
import { setHelloMessage } from './actions'
import Component from './component'

function mapStateToProps (state, ownProps) {
  console.log('state', state)
  return {
    message: state.helloWorld.message // object
    // message: state.helloWorld.get('message') // immutable
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    __setHelloMessage: ({ message }) => {
      dispatch(setHelloMessage({ message }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
