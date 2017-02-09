import React, { Component } from 'react'
import Bar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Link from 'react-router-dom/Link'

const links = [
  {
    to: '/',
    children: 'Home'
  },
  {
    to: '/about',
    children: 'About'
  },
  {
    to: '/topics',
    children: 'Topics'
  },
  {
    to: '/will-not-match',
    children: 'Wil not match'
  }
]

class AppBar extends Component {
  state = {
    open: false
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  handleRequestChange = (open) => this.setState({ open });

  render () {
    const { open } = this.state

    return (
      <div>
        <Bar
          title='Title'
          onLeftIconButtonTouchTap={this.handleOpen}
        />
        <Drawer
          docked={false}
          open={open}
          onRequestChange={this.handleRequestChange}
        >
          <nav>
            {links.map((link, key) => (
              <MenuItem
                key={key}
                onTouchTap={this.handleClose}
              >
                <Link className='nav-link' {...link} />
              </MenuItem>
            ))}
          </nav>
        </Drawer>
      </div>
    )
  }
}

export default AppBar
