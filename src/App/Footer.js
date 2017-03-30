import React from "react";
import { grey900, lightWhite } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import CopyrightIcon from "react-icons/md/copyright";
import GitHubIcon from "react-icons/fa/github";
import TwitterIcon from "react-icons/fa/twitter";
import urls from "../urls";

const styles = {
  footer: {
    backgroundColor: grey900,
    color: lightWhite
  },
  mediumIcon: {
    height: "3em",
    width: "3em",
    color: lightWhite
  },
  medium: {
    fontSize: "inherit",
    height: "3em",
    width: "5em",
    padding: "0 1em"
  }
};

const Footer = () => (
  <footer className="mini-footer" style={styles.footer}>
    <div className="mini-footer--left" />
    <div className="mini-footer--center">
      <CopyrightIcon /> Sylvain Dethier.
      <IconButton
        iconStyle={styles.mediumIcon}
        style={styles.medium}
        href={urls.twitter}
        tooltip="Mon Twitter"
        tooltipPosition="top-center"
        touch
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        iconStyle={styles.mediumIcon}
        style={styles.medium}
        href={urls.github}
        tooltip="Mon GitHub"
        tooltipPosition="top-center"
        touch
      >
        <GitHubIcon className="react-icons bigger" />
      </IconButton>
    </div>
    <div className="mini-footer--right" />
  </footer>
);

export default Footer;
