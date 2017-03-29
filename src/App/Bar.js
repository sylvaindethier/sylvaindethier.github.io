import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Link from "react-router-dom/Link";
import HomeIcon from "react-icons/md/home";
import PersonIcon from "react-icons/md/person";
import CodeIcon from "react-icons/md/code";
import ContactMailIcon from "react-icons/md/contact-mail";
import urls from "../urls";

const menuItems = [
  {
    icon: <HomeIcon />,
    link: {
      to: urls.home,
      children: "Accueil"
    }
  },

  {
    icon: <PersonIcon />,
    link: {
      to: urls.about,
      children: "À propos"
    }
  },

  {
    icon: <CodeIcon />,
    link: {
      to: urls.resume,
      children: "CV"
    }
  },

  {
    icon: <ContactMailIcon />,
    link: {
      to: urls.contact,
      children: "Contact"
    }
  }
];

const styles = {
  AppBar: { position: "fixed", top: 0, height: 64 }
};

export default class Bar extends Component {
  state = {
    open: false
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  handleRequestChange = open => this.setState({ open });

  render() {
    const { open } = this.state;

    return (
      <div>
        <AppBar
          title="S. Dethier - WebApp Developer"
          style={styles.AppBar}
          onLeftIconButtonTouchTap={this.handleOpen}
        />
        <Drawer
          docked={false}
          open={open}
          onRequestChange={this.handleRequestChange}
        >
          <nav>
            {menuItems.map((menuItem, key) => (
              <MenuItem
                key={key}
                onTouchTap={this.handleClose}
                leftIcon={menuItem.icon}
                children={
                  <Link className="menu-item-link" {...menuItem.link} />
                }
              />
            ))}
          </nav>
        </Drawer>
      </div>
    );
  }
}
