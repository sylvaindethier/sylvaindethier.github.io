import React from "react";
import { grey900, lightWhite } from "material-ui/styles/colors";
import urls from "../urls";

const footerStyle = {
  backgroundColor: grey900,
  color: lightWhite
};

const Footer = () => (
  <footer className="mini-footer" style={footerStyle}>
    <div className="mini-footer--left" />
    <div className="mini-footer--center">
      © Sylvain Dethier.
      Propulsé par <a href="https://pages.github.com/">GitHub Pages</a>.
      <a href={urls.twitter}>Twitter</a>
      <a href={urls.github}>GitHub</a>
    </div>
    <div className="mini-footer--right" />
  </footer>
);

export default Footer;
