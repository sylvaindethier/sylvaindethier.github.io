import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import Link from 'react-router-dom/Link'

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
      <div style={{ paddingBottom: 64 }}>
        <AppBar
          title='S. Dethier'
          style={{ position: 'fixed', top: 0 }}
          onLeftIconButtonTouchTap={this.handleOpen}
        />
        <Drawer
          docked={false}
          open={open}
          onRequestChange={this.handleRequestChange}
        >
          <nav>
            <MenuItem
              onTouchTap={this.handleClose}
              leftIcon={<FontIcon className='material-icons'>home</FontIcon>}
              children={<Link className='menu-item-link' to='/'>Accueil</Link>}
            />
            <MenuItem
              onTouchTap={this.handleClose}
              leftIcon={<FontIcon className='material-icons'>code</FontIcon>}
              children={<Link className='menu-item-link' to='/resume'>CV</Link>}
            />
            <MenuItem
              onTouchTap={this.handleClose}
              leftIcon={<FontIcon className='material-icons'>info</FontIcon>}
              children={<Link className='menu-item-link' to='/about'>À propos</Link>}
            />
          </nav>
        </Drawer>
      </div>
    )
  }
}
