import { render } from 'react-dom';
import loadPolyfills from './utils/polyfills';
import intl from './intl';


function renderRoot() {
  // user locale
  const locale = 'en-US';

  console.log('render app');
  render(
    intl(locale),
    document.getElementById('root')
  );
}
loadPolyfills().then(renderRoot);
