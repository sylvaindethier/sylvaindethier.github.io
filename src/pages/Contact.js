/* @flow */
import React from "react";
import Link from "react-router-dom/Link";
import { Card, CardHeader, CardActions } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import ContactMailIcon from "react-icons/md/contact-mail";
import EmailIcon from "react-icons/md/email";
import TwitterIcon from "react-icons/fa/twitter";
import urls from "../urls";

const Contact = () => (
  <Card zDepth={2}>
    <CardHeader
      title="Contact"
      subtitle="Me contacter."
      avatar={<ContactMailIcon className="react-icons bigger" />}
    />
    <CardActions>
      <Link to={urls.email} data-ga-label="Email @contact-page">
        <RaisedButton
          primary
          label="Email"
          icon={<EmailIcon className="react-icons big" />}
        />
      </Link>
      <Link to={urls.twitter} data-ga-label="Twitter @contact-page">
        <RaisedButton
          primary
          label="Twitter"
          icon={<TwitterIcon className="react-icons big" />}
        />
      </Link>
    </CardActions>
  </Card>
);

export default Contact;
