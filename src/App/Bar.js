import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import Link from 'react-router-dom/Link'

// don't forget to add corresponding Link's props from (route.path)s
const menuItems = [
  {
    materialIcon: 'home',
    link: {
      to: '/',
      children: 'Accueil'
    }
  },

  {
    materialIcon: 'code',
    link: {
      to: '/resume',
      children: 'CV'
    }
  },

  {
    materialIcon: 'info',
    link: {
      to: '/about',
      children: 'À propos'
    }
  }
]

const styles = {
  AppBar: { position: 'fixed', top: 0, height: 64 },
  Bar: { paddingBottom: 64 }
}

export default class Bar extends Component {
  state = {
    open: false
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  handleRequestChange = (open) => this.setState({ open });

  render () {
    const { open } = this.state

    return (
      <div style={styles.Bar}>
        <AppBar
          title='S. Dethier - WebApp Developer'
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
                leftIcon={
                  <FontIcon
                    className='material-icons'>
                    {menuItem.materialIcon}
                  </FontIcon>
                }
                children={
                  <Link
                    className='menu-item-link'
                    {...menuItem.link}
                  />
                }
              />
            ))}
          </nav>
        </Drawer>
      </div>
    )
  }
}
