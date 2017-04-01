/* @flow */
import React from "react";
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";
import AboutMe from "./AboutMe";

const styles = {
  CardText: { fontSize: "medium" }
};

const About = () => (
  <Card zDepth={2}>
    <CardHeader
      title="Sylvain Dethier"
      subtitle="WebApp Developer"
      avatar="icons/favicon.png"
    />

    <CardTitle title="À propos" subtitle="Qui je suis." />
    <CardText style={styles.CardText}>
      <AboutMe />
    </CardText>
  </Card>
);

export default About;
