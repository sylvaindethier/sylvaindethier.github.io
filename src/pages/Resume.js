/* @flow */
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
      avatar={<CodeIcon className="react-icons bigger" />}
    />
    <CardText>
      Mon parcours sur
      <RaisedButton
        href={urls.linkedin}
        label="LinkedIn"
        icon={<LinkedInIcon className="react-icons big" />}
        style={styles.RaisedButton}
      />
      <br />
      <br />
      Mes collaborations publiques sur
      <RaisedButton
        href={urls.github}
        label="GitHub"
        icon={<GitHubIcon className="react-icons big" />}
        style={styles.RaisedButton}
      />
      {" "}, à voir aussi sur
      <RaisedButton
        href={urls.gitshowcase}
        label="Git Showcase"
        icon={<GitHubIcon className="react-icons big" />}
        style={styles.RaisedButton}
      />
    </CardText>
    <CardText>
      Dernière mise à jour: <b>avril 2017</b>.
    </CardText>
    <CardActions>
      <RaisedButton
        primary
        href={urls.resumePdf}
        target="_blank"
        label="Télécharger le PDF"
        icon={<FileDownloadIcon className="react-icons big" />}
      />
    </CardActions>
  </Card>
);

export default Resume;
