import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Translated = () => (
  <div>
    <p>
      <FormattedMessage {...messages.simple} />
    </p>
    <p>
      <FormattedMessage
        {...messages.singleVariable}
        values={{name: 'Hello World'}}
      />
    </p>
    <p>
      <FormattedMessage
        {...messages.multipleVariable}
        values={{foo: 'foo value', bar: 'bar value'}}
      />
    </p>
    <p>
      <FormattedMessage {...messages.untranslated} />
    </p>
  </div>
);
Translated.displayName = 'TranslatedComponent';

export default Translated;
