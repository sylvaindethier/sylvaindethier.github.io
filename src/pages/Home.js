import React from "react";
import { Card, CardHeader, CardActions } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import CodeIcon from "react-icons/md/code";
import ContactMailIcon from "react-icons/md/contact-mail";
import Link from "react-router-dom/Link";
import urls from "../urls";

const styles = {
  Card: {
    margin: "24px 0"
  }
};

const AboutCard = (
  <Card style={styles.Card}>
    <CardHeader
      title="À propos"
      subtitle="Qui je suis et du site."
      avatar="icons/favicon.png"
    />
    <CardActions>
      <Link to={urls.about}><RaisedButton primary label="Voir la page" /></Link>
    </CardActions>
  </Card>
);

const ResumeCard = (
  <Card style={styles.Card}>
    <CardHeader
      title="C.V."
      subtitle="Mon parcours professionnel."
      avatar={<CodeIcon className="react-icons" />}
    />
    <CardActions>
      <Link to={urls.resume}>
        <RaisedButton primary label="Voir la page" />
      </Link>
    </CardActions>
  </Card>
);

const ContactCard = (
  <Card style={styles.Card}>
    <CardHeader
      title="Contact"
      subtitle="Me contacter."
      avatar={<ContactMailIcon className="react-icons" />}
    />
    <CardActions>
      <Link to={urls.contact}>
        <RaisedButton primary label="Voir la page" />
      </Link>
    </CardActions>
  </Card>
);

const Home = () => (
  <div>
    {AboutCard}
    {ResumeCard}
    {ContactCard}
  </div>
);

export default Home;
