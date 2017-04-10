/* @flow */
import React from "react";
import Link from "react-router-dom/Link";
import { Card, CardHeader, CardText, CardActions } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import CodeIcon from "react-icons/md/code";
import FileDownloadIcon from "react-icons/md/file-download";
import LinkedInIcon from "react-icons/fa/linkedin";
import GitHubIcon from "react-icons/fa/github";
import urls from "../urls";

const styles = {
  Button: { marginRight: "0.5em", marginLeft: "0.5em" }
};

const Resume = () => (
  <Card zDepth={2}>
    <CardHeader
      title="C.V."
      subtitle="Mon parcours professionnel."
      avatar={<CodeIcon className="react-icons bigger" />}
    />
    <CardText>
      Mon parcours complet sur
      <Link
        to={urls.linkedin}
        data-ga-label="LinkedIn @resume-page"
        style={styles.Button}
      >
        <RaisedButton
          label="LinkedIn"
          icon={<LinkedInIcon className="react-icons big" />}
        />
      </Link>
      <br />
      <br />
      Mes collaborations publiques sur
      <Link
        to={urls.github}
        data-ga-label="GitHub @resume-page"
        style={styles.Button}
      >
        <RaisedButton
          label="GitHub"
          icon={<GitHubIcon className="react-icons big" />}
        />
      </Link>, à voir aussi sur
      <Link
        to={urls.gitshowcase}
        data-ga-label="GitShowcase @resume-page"
        style={styles.Button}
      >
        <RaisedButton
          label="Git Showcase"
          icon={<GitHubIcon className="react-icons big" />}
        />
      </Link>
    </CardText>
    <CardText>
      Dernière mise à jour: <b>avril 2017</b>.
    </CardText>
    <CardActions>
      <Link
        to={urls.resumePdf}
        target="_blank"
        data-ga-label="PDF @resume-page"
      >
        <RaisedButton
          primary
          label="Télécharger le PDF"
          icon={<FileDownloadIcon className="react-icons big" />}
        />
      </Link>
    </CardActions>
  </Card>
);

export default Resume;
