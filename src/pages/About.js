import React from 'react'
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card'

const htmlMe = `
  <p>Je suis développeur web depuis <b>2008</b>. J'ai commencé sur des projets
  <b><i>backend</i></b> en <code>PHP</code> (<code>Symfony</code>, <code>Zend</code>),
  avec souvent une partie <b><i>frontend</i></b> (<code>JavaScript</code>, <code>jQuery</code>).</p>

  <p>Depuis <b>2015</b>, je m'oriente en tant que développeur WebApp
  <b><i>frontend / backend</i></b> en <code>JavaScript</code>
  (<code>NodeJS</code>, <code>React</code>, UI, UX).</p>

  <p>J'ai sourtout collaboré avec de petites équipes où des compétences <b><i>full-stack</i></b>
  sont nécessaires.</p>
`
const htmlSite = `
  <p>Le site est propulsé par <b><code>GitHub Pages</code></b>,
  développé en <b><i>modern</i> <code>ReactJS</code></b>
  (<code>NodeJS</code>,
  <code>babel es6 / es7</code>, <code>Webpack</code>, <code>ESLint, Prettier</code>,
  <code>ReactJS</code>, <code>React Router</code>, <code>Material UI</code>, ...).</p>
`

const styles = {
  CardText: { fontSize: 'medium' }
}

const About = () => (
  <Card zDepth={2}>
    <CardHeader
      title='Sylvain Dethier'
      subtitle='WebApp Developer'
      avatar='icons/favicon.png'
    />
    <CardTitle title='À propos' subtitle='Qui je suis.' />
    <CardText style={styles.CardText}>
      <div dangerouslySetInnerHTML={{__html: htmlMe}} />
    </CardText>

    <CardTitle title='À propos' subtitle='Du site.' />
    <CardText>
      <div dangerouslySetInnerHTML={{__html: htmlSite}} />
    </CardText>
  </Card>
)

export default About
