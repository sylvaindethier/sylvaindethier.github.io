import React from 'react'

const getDisplayName = (Component) => (
  Component.displayName ||
  Component.name ||
  'Component'
)

// source: https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
// getComponent is a function that returns a promise for a component
// It will not be called until the first mount
export default function asyncComponent (getComponent, DefaultComponent = null) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    static displayName = 'AsyncComponent';
    state = { Component: AsyncComponent.Component };
    mounted = false;

    componentWillMount () {
      if (this.state.Component === null) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          AsyncComponent.displayName = `Async(${getDisplayName(Component)})`
          // check if the Component is still mounted before calling setState
          // to ensure it still needs to be rendered
          this.mounted &&
          this.setState({ Component })
        })
      }
    }

    componentDidMount () {
      this.mounted = true
    }
    componentWillUnmount () {
      this.mounted = false
    }

    renderDefault () {
      // render DefaultComponent if any
      return DefaultComponent === null
        ? (
          null
        ) : (
          <DefaultComponent {...this.props} />
        )
    }

    render () {
      const { Component } = this.state
      return Component === null ? (
        this.renderDefault()
      ) : (
        <Component {...this.props} />
      )
    }
  }
}

// add some easying utils
function getComponentModule (getModule) {
  return () => getModule().then(module => module.default)
}

export function asyncComponentModule (getModule, DefaultComponent) {
  return asyncComponent(getComponentModule(getModule), DefaultComponent)
}
