import React from "react";
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";

const styles = {
  CardText: { fontSize: "medium" }
};

const CardTextMe = (
  <CardText style={styles.CardText}>
    <p>
      Développeur web depuis
      {" "}
      <b>2008</b>
      , j'ai commencé sur des projets
      {" "}
      <i><b>backend</b></i>
      {" "}
      .
      <br />
      Le plus souvent avec une intégration <i><b>frontend</b></i> .<br />
      J'ai travaillé pendant plus de <b>6 ans</b> avec
      <b><code>PHP</code></b> , <b><code>Symfony</code></b> ,
      {" "}
      <code>Zend</code>
      ,
      {" "}
      <code>HTML</code>
      ,
      {" "}
      <code>CSS</code>
      ,
      {" "}
      <code>JavaScript</code>
      ,
      {" "}
      <code>jQuery</code>
      .
    </p>

    <p>
      Depuis
      {" "}
      <b>2015</b>
      , je m'oriente en tant que développeur WebApp
      {" "}
      <i><b>frontend</b> / backend</i>
      {" "}
      en
      {" "}
      <code>JavaScript / NodeJS</code>
      ,
      {" "}
      <code>React</code>
      .
    </p>

    <p>
      J'ai sourtout collaboré avec de petites équipes, des compétences
      {" "}
      <b><i>full-stack</i></b>
      {" "}
      sont nécessaires.
    </p>
  </CardText>
);
const CardTextSite = (
  <CardText>
    <section>
      <p>
        Le site est propulsé par <b><code>GitHub Pages</code></b> ,
        développé en <b><i>modern</i> <code>ReactJS</code></b>
        (<code>NodeJS</code> ,
        <code>babel es6 / es7</code>
        {" "}
        ,
        {" "}
        <code>Webpack</code>
        {" "}
        ,
        {" "}
        <code>ESLint, Prettier</code>
        {" "}
        ,
        <code>ReactJS</code>
        {" "}
        ,
        {" "}
        <code>React Router</code>
        {" "}
        ,
        {" "}
        <code>Material UI</code>
        {" "}
        , ...).
      </p>
    </section>
  </CardText>
);
const About = () => (
  <Card zDepth={2}>
    <CardHeader
      title="Sylvain Dethier"
      subtitle="WebApp Developer"
      avatar="icons/favicon.png"
    />

    <CardTitle title="À propos" subtitle="Qui je suis." />
    {CardTextMe}

    <CardTitle title="À propos" subtitle="Du site." />
    {CardTextSite}
  </Card>
);
export default About;
