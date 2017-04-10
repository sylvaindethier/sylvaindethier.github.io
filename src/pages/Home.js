/* @flow */
import React from "react";
import { Card, CardHeader, CardActions } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import CodeIcon from "react-icons/md/code";
import ContactMailIcon from "react-icons/md/contact-mail";
import PageViewIcon from "react-icons/md/pageview";
import Link from "react-router-dom/Link";
import urls from "../urls";
import { intlLocation } from "../intl";

const styles = {
  Card: {
    margin: "24px 0"
  }
};

const AboutCard = (
  <Card style={styles.Card}>
    <CardHeader
      title="À propos"
      subtitle="Qui je suis."
      avatar="/icons/favicon.png"
    />
    <CardActions>
      <Link to={intlLocation(urls.about)} data-ga-label="About @home-page">
        <RaisedButton
          primary
          label="Voir la page"
          icon={<PageViewIcon className="react-icons big" />}
        />
      </Link>
    </CardActions>
  </Card>
);

const ResumeCard = (
  <Card style={styles.Card}>
    <CardHeader
      title="C.V."
      subtitle="Mon parcours professionnel."
      avatar={<CodeIcon className="react-icons bigger" />}
    />
    <CardActions>
      <Link to={intlLocation(urls.resume)} data-ga-label="Resume @home-page">
        <RaisedButton
          primary
          label="Voir la page"
          icon={<PageViewIcon className="react-icons big" />}
        />
      </Link>
    </CardActions>
  </Card>
);

const ContactCard = (
  <Card style={styles.Card}>
    <CardHeader
      title="Contact"
      subtitle="Me contacter."
      avatar={<ContactMailIcon className="react-icons bigger" />}
    />
    <CardActions>
      <Link to={intlLocation(urls.contact)} data-ga-label="Contact @home-page">
        <RaisedButton
          primary
          label="Voir la page"
          icon={<PageViewIcon className="react-icons big" />}
        />
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
