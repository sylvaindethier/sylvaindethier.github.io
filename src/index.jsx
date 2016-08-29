import React from 'react';
import { render } from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
// locales support
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
// Components
import Translated from './components/Translated';

// register react-intl supported locales
addLocaleData([...fr, ...en]);

const locale = 'en-US';
// get locale translated messages
const messages = require(`../l10n/${locale}.json`);

render(
  <IntlProvider locale={ locale } messages={ messages }>
    <Translated />
  </IntlProvider>,
  document.getElementById('root')
);
