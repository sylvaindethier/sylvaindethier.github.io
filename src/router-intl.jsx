import React from 'react';
import { IntlProvider } from 'react-intl';
import router from './router';

const locale = 'en';
const messages = []
export default (
  <IntlProvider
    locale={locale} key={locale}
    messages={messages}
    children={router}
  />
);
