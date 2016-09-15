import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  HomeTitle: {
    id: 'Home.title',
    defaultMessage: 'Home',
    description: 'Home title'
  }
})

const Home = () => (
  <h1><FormattedMessage {...messages.HomeTitle} /></h1>
)
Home.displayName = 'Home'
Home.propsType = {}

export default Home
