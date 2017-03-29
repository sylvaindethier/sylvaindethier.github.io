import React from "react";
import { Card, CardHeader, CardText, CardActions } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";
import urls from "../urls";

const styles = {
  RaisedButton: {
    marginLeft: "0.5em",
    marginRight: "0.5em"
  }
};

const Resume = () => (
  <Card zDepth={2}>
    <CardHeader
      title="C.V."
      subtitle="Mon parcours professionnel."
      avatar={<FontIcon className="material-icons">code</FontIcon>}
    />
    <CardText>
      Mon parcours sur
      <RaisedButton
        href={urls.linkedin}
        label="LinkedIn"
        icon={<FontIcon className="fa fa-linkedin" />}
        style={styles.RaisedButton}
      />
    </CardText>
    <CardText>
      Mes collaborations publiques sur
      <RaisedButton
        href={urls.gitshowcase}
        label="Git Showcase"
        style={styles.RaisedButton}
      />
      <RaisedButton
        href={urls.github}
        label="GitHub"
        icon={<FontIcon className="fa fa-github" />}
        style={styles.RaisedButton}
      />
    </CardText>
    <CardActions>
      <RaisedButton
        primary
        href={urls.resumePdf}
        label="Télécharger le PDF"
        icon={<FontIcon className="material-icons">file_download</FontIcon>}
      />
    </CardActions>
  </Card>
);

export default Resume;
