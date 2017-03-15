import React from 'react'
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card'
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
      subtitle='WebApp Developer'
      avatar='icons/favicon.png'
    />
    <CardTitle title='À propos' subtitle='De qui je suis.' />
    <CardActions>
      <RaisedButton
        label={<Link to={urls.about}>Voir la page</Link>}
        icon={<FontIcon className='material-icons'>person</FontIcon>}
        secondary
      />
    </CardActions>
  </Card>
)

const ResumeCard = () => (
  <Card>
    <CardHeader
      title='URL Avatar'
      subtitle='Subtitle'
      avatar='images/jsa-128.jpg'
    />
    <CardTitle title='Card title' subtitle='Card subtitle' />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
)

const ContactCard = () => (
  <Card>
    <CardHeader
      title='URL Avatar'
      subtitle='Subtitle'
      avatar='images/jsa-128.jpg'
    />
    <CardTitle title='Card title' subtitle='Card subtitle' />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
)

const Home = () => (
  <div className='page-content'>
    <AboutCard />
    <ResumeCard />
    <ContactCard />
  </div>
)

export default Home
