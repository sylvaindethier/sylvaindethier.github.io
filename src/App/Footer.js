/* @flow */
import React from "react";
import { grey900, lightWhite } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import HeartIcon from "react-icons/fa/heart";
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

const Site = (
  <p>
    Made with
    {" "}
    <HeartIcon className="react-icons" /> by Sylvain Dethier.
    <br />
    Powered by <a href="https://pages.github.com/">GitHub Pages</a>.
    <br />
    <a href="https://facebook.github.io/react/">ReactJS</a>
    ,
    {" "}
    <a href="https://reacttraining.com/react-router/">React Router</a>
    ,
    {" "}
    <a href="https://github.com/thejameskyle/react-loadable">
      React Loadable
    </a>
    ,
    {" "}
    <a href="https://webpack.js.org/">Webpack</a>
    ,
    {" "}
    <a href="http://eslint.org/">ESLint</a>
    {" "}
    /
    {" "}
    <a href="https://github.com/prettier/prettier">Prettier</a>
    ,
    {" "}
    <a href="http://www.material-ui.com/">Material-UI</a>
    ,
    {" "}
    <a href="https://gorangajic.github.io/react-icons/">React Icons</a>
    {" "}
    ….
  </p>
);

const Socials = (
  <div>
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
);

const Footer = () => (
  <footer className="mini-footer" style={styles.footer}>
    <div className="mini-footer--center">
      {Site}
      {Socials}
    </div>
  </footer>
);

export default Footer;
