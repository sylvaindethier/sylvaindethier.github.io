/* @flow */
import React from "react";
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";

const AboutMe = (
  <section>
    <p>
      Développeur web depuis 2008, j'ai commencé sur des projets
      {" "}
      <i><b>backend</b></i>
      . Le plus souvent avec une intégration
      {" "}
      <i><b>frontend</b></i>
      .
      <br />
      J'ai travaillé pendant plus de 6 ans avec
      {" "}
      <b>PHP</b>
      ,
      {" "}
      <b>Symfony</b>
      , Zend, HTML, CSS, JavaScript, jQuery.
    </p>

    <p>
      Depuis <b>2015</b>
      , je m'oriente en tant que développeur WebApp
      {" "}
      <i><b>frontend / backend</b></i>
      {" "}
      en
      {" "}
      <b>JavaScript / NodeJS</b>
      ,
      {" "}
      <b>React</b>, Angular, Express, ….
    </p>

    <p>
      J'ai sourtout collaboré avec de petites équipes, des compétences
      {" "}
      <i><b>full-stack</b></i>
      ,
      {" "}
      <i>DevOps</i>
      {" "}
      sont nécessaires.
    </p>
  </section>
);

const styles = {
  CardText: { fontSize: "medium" }
};

const About = () => (
  <Card zDepth={2}>
    <CardHeader
      title="Sylvain Dethier"
      subtitle="WebApp Developer"
      avatar="/icons/favicon.png"
    />

    <CardTitle title="À propos" subtitle="Qui je suis." />
    <CardText style={styles.CardText}>
      {AboutMe}
    </CardText>
  </Card>
);

export default About;
