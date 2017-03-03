import React from 'react'
import Paper from 'material-ui/Paper'
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card'

const HomePaper = () => (
  <Paper zDepth={2}>
    <h2>Développeur d'application web.</h2>
    <p>JavaScript, NodeJS, ReactJS. UI/UX.</p>
  </Paper>
)

const Home = () => (
  <div>
    <HomePaper />
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
  </div>
)

export default Home
