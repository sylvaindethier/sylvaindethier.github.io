import React from 'react'
import { Card, CardHeader, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import Link from 'react-router-dom/Link'
import urls from '../urls'

const styles = {
  Card: { margin: '24px 0' }
}

// eslint-disable-next-line react/prop-types
const RaisedButtonLink = ({ to, href, ...rest }) => (
  <Link to={to || href}><RaisedButton {...rest} /></Link>
)

const AboutCard = (
  <Card style={styles.Card}>
    <CardHeader
      title='À propos'
      subtitle='De qui je suis et du site.'
      avatar='icons/favicon.png'
    />
    <CardActions>
      <RaisedButtonLink to={urls.about} primary label='Voir la page' />
    </CardActions>
  </Card>
)

const ResumeCard = (
  <Card style={styles.Card}>
    <CardHeader
      title='C.V.'
      subtitle='Mon parcours professionnel.'
      avatar={<FontIcon className='material-icons'>code</FontIcon>}
    />
    <CardActions>
      <RaisedButtonLink to={urls.resume} primary label='Voir la page' />
    </CardActions>
  </Card>
)

const ContactCard = (
  <Card style={styles.Card}>
    <CardHeader
      title='Contact'
      subtitle='Me contacter.'
      avatar={<FontIcon className='material-icons'>contact_mail</FontIcon>}
    />
    <CardActions>
      <RaisedButtonLink to={urls.contact} primary label='Voir la page' />
    </CardActions>
  </Card>
)

const Home = () => (
  <div>
    {AboutCard}
    {ResumeCard}
    {ContactCard}
  </div>
)

export default Home
