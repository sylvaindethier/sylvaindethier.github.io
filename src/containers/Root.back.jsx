import { PropTypes, Component } from 'react';
import createRouter from './createRouter';
import createIntlRouter from './createIntlRouter';
import { locales } from '../utils/locales';

export function createRoot({routes, locale, messages}) {
  const router = createRouter({ routes });
  const root = createIntlRouter({ router, locale, messages });
  return root;
}

// PropTypes shortcut
const { object, arrayOf, oneOf, oneOfType, element } = PropTypes;
const route = oneOfType([ object, element ]);
const routes = oneOfType([ route, arrayOf(route) ]);

class Root extends Component {
  static displayName = 'Root';
  static propTypes = {
    routes: routes.isRequired,
    locale: oneOf(locales).isRequired,
    messages: object,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // no render on setState
    console.log('Root will mount (before render)');
  }

  componentDidMount() {
    console.log('Root did mount (after render)');
  }

  componentWillReceiveProps(nextProps) {
    // no render on setState
    console.log('Root will receive next props', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Root should update w/ next props, state', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // CAN NOT use setState
    console.log('Root will update w/ next props, state', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Root did update w/ prev props, state', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('Root will unmount');
  }

  render() {
    console.log('Root render props, state', this.props, this.state);
    return createRoot(this.props);
  }
}

export default Root;
