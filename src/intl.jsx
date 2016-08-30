import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
// locales support
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';
// router
import router from './router';

const locales = ['fr', 'en'];
const defaultLocale = locales[0];

// register react-intl supported locales
addLocaleData([...fr, ...en]);

const intl = (locale = defaultLocale) => {
  // get localized (translated) messages
  const messages = require(`../l10n/${locale}.json`);
  return (
    <IntlProvider locale={locale} key={locale} messages={messages}>
      {router}
    </IntlProvider>
  );
};

export default intl;
export { defaultLocale, locales };
