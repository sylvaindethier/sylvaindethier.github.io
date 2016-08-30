import { render } from 'react-dom';
import intl from './intl';

// user locale
const locale = 'en-US';

render(
  intl(locale),
  document.getElementById('root')
);
