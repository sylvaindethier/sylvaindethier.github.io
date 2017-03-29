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
    width: 48,
    height: 48,
    color: lightWhite
  },
  medium: {
    width: 72,
    height: 96,
    padding: "24px 12px"
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
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        iconStyle={styles.mediumIcon}
        style={styles.medium}
        href={urls.github}
      >
        <GitHubIcon />
      </IconButton>
    </div>
    <div className="mini-footer--right" />
  </footer>
);

export default Footer;
