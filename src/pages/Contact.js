import React from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";
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
      avatar={<FontIcon className="material-icons">contact_mail</FontIcon>}
    />
    <CardText>
      <RaisedButton
        href={urls.email}
        label="Email"
        icon={<FontIcon className="material-icons">contact_mail</FontIcon>}
        style={styles.RaisedButton}
      />
      <RaisedButton
        href={urls.twitter}
        label="Twitter"
        icon={<FontIcon className="fa fa-twitter" />}
        style={styles.RaisedButton}
      />
      <RaisedButton
        href={urls.linkedin}
        label="LinkedIn"
        icon={<FontIcon className="fa fa-linkedin" />}
        style={styles.RaisedButton}
      />
    </CardText>
  </Card>
);

export default Contact;
