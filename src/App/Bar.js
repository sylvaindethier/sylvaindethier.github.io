import React, { Component } from "react";
import NavLink from "react-router-dom/NavLink";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import HomeIcon from "react-icons/md/home";
import AboutIcon from "react-icons/md/info";
import ResumeIcon from "react-icons/md/code";
import ContactIcon from "react-icons/md/contact-mail";
import LanguageSelector from "./LanguageSelector";
import urls from "../urls";

const menuItems = [
  {
    icon: <HomeIcon />,
    link: {
      to: urls.home,
      exact: true,
      children: "Accueil"
    }
  },

  {
    icon: <AboutIcon />,
    link: {
      to: urls.about,
      children: "À propos"
    }
  },

  {
    icon: <ResumeIcon />,
    link: {
      to: urls.resume,
      children: "CV"
    }
  },

  {
    icon: <ContactIcon />,
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
      <header>
        <AppBar
          title="S. Dethier - WebApp Developer"
          style={styles.AppBar}
          onLeftIconButtonTouchTap={this.handleOpen}
          iconElementRight={<LanguageSelector />}
        />
        <aside>
          <Drawer
            docked={false}
            open={open}
            onRequestChange={this.handleRequestChange}
          >
            <nav>
              <Menu>
                {menuItems.map((menuItem, key) => (
                  <MenuItem
                    key={key}
                    onTouchTap={this.handleClose}
                    leftIcon={menuItem.icon}
                    children={
                      <NavLink className="menu-item-link" {...menuItem.link} />
                    }
                  />
                ))}
              </Menu>
            </nav>
          </Drawer>
        </aside>
      </header>
    );
  }
}
