import React from 'react';
import { IntlProvider } from 'react-intl';

const createIntlRouter = ({ router, locale, messages }) => (
  <IntlProvider locale={locale} key={locale} messages={messages}>
    {router}
  </IntlProvider>
);

export default createIntlRouter;
