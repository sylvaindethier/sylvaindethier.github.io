import React from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import ContactMailIcon from "react-icons/md/contact-mail";
import TwitterIcon from "react-icons/fa/twitter";
import LinkedInIcon from "react-icons/fa/linkedin";
import urls from "../urls";

const styles = {
  RaisedButton: {
    marginLeft: "1em",
    marginRight: "1em"
  }
};

const Contact = () => (
  <Card zDepth={2}>
    <CardHeader
      title="Contact"
      subtitle="Me contacter."
      avatar={<ContactMailIcon className="react-icons" />}
    />
    <CardText>
      <RaisedButton
        href={urls.email}
        label="Email"
        icon={<ContactMailIcon className="react-icons" />}
        style={styles.RaisedButton}
      />
      <RaisedButton
        href={urls.twitter}
        label="Twitter"
        icon={<TwitterIcon className="react-icons" />}
        style={styles.RaisedButton}
      />
      <RaisedButton
        href={urls.linkedin}
        label="LinkedIn"
        icon={<LinkedInIcon className="react-icons" />}
        style={styles.RaisedButton}
      />
    </CardText>
  </Card>
);

export default Contact;
