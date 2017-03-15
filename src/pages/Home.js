import React from 'react'
import { Card, CardHeader, CardTitle, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import Link from 'react-router-dom/Link'
import urls from '../urls'

const styles = {
  Card: { margin: '24px 0' }
}

const AboutCard = () => (
  <Card style={styles.Card}>
    <CardHeader
      title='Sylvain Dethier'
      subtitle='WebApp Developer.'
      avatar='icons/favicon.png'
    />
    <CardTitle
      title='À propos'
      subtitle='De qui je suis et du site.'
    />
    <CardActions>
      <RaisedButton
        label={<Link className='button-link' to={urls.about}>Voir la page</Link>}
        icon={<FontIcon className='material-icons'>person</FontIcon>}
        secondary
      />
    </CardActions>
  </Card>
)

const ResumeCard = () => (
  <Card style={styles.Card}>
    <CardTitle
      title='C.V.'
      subtitle='Mon parcours professionnel.'
    />
    <CardActions>
      <RaisedButton
        label={<Link className='button-link' to={urls.resume}>Voir la page</Link>}
        icon={<FontIcon className='material-icons'>code</FontIcon>}
        secondary
      />
    </CardActions>
  </Card>
)

const ContactCard = () => (
  <Card style={styles.Card}>
    <CardTitle
      title='Contact'
      subtitle='Comment me contacter.'
    />
    <CardActions>
      <RaisedButton
        label={<Link className='button-link' to={urls.contact}>Voir la page</Link>}
        icon={<FontIcon className='material-icons'>contact_mail</FontIcon>}
        secondary
      />
    </CardActions>
  </Card>
)

const Home = () => (
  <div>
    <AboutCard />
    <ResumeCard />
    <ContactCard />
  </div>
)

export default Home
