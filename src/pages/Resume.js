/* eslint-disable react/jsx-indent */
import React from 'react'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import urls from '../urls'

const Resume = () => (
  <Card zDepth={2}>
    <CardHeader
      title='C.V.'
      subtitle='Mon parcours professionnel.'
      avatar={<FontIcon className='material-icons'>code</FontIcon>}
    />
    <CardText>
      <p>Mon parcours sur
        &nbsp; <RaisedButton label='LinkedIn' icon={<FontIcon className='fa fa-linkedin' />} />
      </p>
      <p>Mes collaborations publiques sur
        &nbsp; <RaisedButton label='GitHub' icon={<FontIcon className='fa fa-github' />} />
      </p>
    </CardText>
    <CardActions>
      <RaisedButton
        label={
          <a className='button-link' href={urls.resumePdf}>Télécharger le PDF</a>
        }
        icon={<FontIcon className='material-icons'>file_download</FontIcon>}
        secondary
      />
    </CardActions>
  </Card>
)

export default Resume
