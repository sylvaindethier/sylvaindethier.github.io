import React from 'react'

// source: https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
// getComponent is a function that returns a promise for a component
// It will not be called until the first mount
export default function asyncComponent (getComponent, DefaultComponent = null) {
  return class AsyncComponent extends React.Component {
    static Component = null
    static DefaultComponent = DefaultComponent
    state = {
      Component: AsyncComponent.Component,
      DefaultComponent: AsyncComponent.DefaultComponent
    }
    mounted = false

    componentWillMount () {
      if (this.state.Component === null) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          // check if the Component is still mounted before calling setState
          // to ensure it still needs to be rendered
          if (this.mounted) {
            this.setState({ Component })
          }
        })
      }
    }

    componentDidMount () {
      this.mounted = true
    }

    componentWillUnmount () {
      this.mounted = false
    }

    render () {
      const { Component, DefaultComponent } = this.state
      return Component !== null ? (
        <Component {...this.props} />
      ) : (
        DefaultComponent !== null ? (
          <DefaultComponent {...this.props} />
        ) : (
          null
        )
      )
    }
  }
}

// add some easying utils
function getModuleComponent (getModule) {
  return () => getModule().then(module => module.default)
}

export function asyncModuleComponent (getModule, DefaultComponent) {
  return asyncComponent(getModuleComponent(getModule), DefaultComponent)
}
