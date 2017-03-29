import React from "react";
import { Card, CardHeader, CardText, CardActions } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import CodeIcon from "react-icons/md/code";
import FileDownloadIcon from "react-icons/md/file-download";
import LinkedInIcon from "react-icons/fa/linkedin";
import GitHubIcon from "react-icons/fa/github";
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
      avatar={<CodeIcon className="react-icons" />}
    />
    <CardText>
      Mon parcours sur
      <RaisedButton
        href={urls.linkedin}
        label="LinkedIn"
        icon={<LinkedInIcon className="react-icons" />}
        style={styles.RaisedButton}
      />
    </CardText>
    <CardText>
      Mes collaborations publiques sur
      <RaisedButton
        href={urls.gitshowcase}
        label="Git Showcase"
        icon={<GitHubIcon className="react-icons" />}
        style={styles.RaisedButton}
      />
      <RaisedButton
        href={urls.github}
        label="GitHub"
        icon={<GitHubIcon className="react-icons" />}
        style={styles.RaisedButton}
      />
    </CardText>
    <CardActions>
      <RaisedButton
        primary
        href={urls.resumePdf}
        label="Télécharger le PDF"
        icon={<FileDownloadIcon className="react-icons" />}
      />
    </CardActions>
  </Card>
);

export default Resume;
