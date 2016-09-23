import { defineMessages } from 'react-intl'

const messages = defineMessages({
  simple: {
    id: 'translated.simple',
    defaultMessage: "I'm a simple message",
    description: 'Simple message'
  },

  singleVariable: {
    id: 'translated.singleVariable',
    defaultMessage: 'Message with a single <code>name</code> variable, value is: {name}',
    defaultValues: { name: 'a default value' },
    description: 'Message with a single "name" variable'
  },

  multipleVariable: {
    id: 'translated.multipleVariable',
    defaultMessage: 'Message with variables: <code>foo</code> is {foo}; <code>bar</code> is {bar}',
    defaultValues: { foo: 'foo', bar: 'bar' },
    description: 'Message with multiple "foo" and "bar" variables'
  },

  untranslated: {
    id: 'translated.untranslated',
    defaultMessage: 'Not yet translated',
    description: 'Example of a missing translation, do not translate'
  }
})

export default messages
