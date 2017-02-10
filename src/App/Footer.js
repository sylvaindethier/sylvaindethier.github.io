import React from 'react'
import { grey900, lightWhite } from 'material-ui/styles/colors'

const footerStyle = {
  backgroundColor: grey900,
  color: lightWhite
}

const Footer = () => (
  <footer className='mini-footer' style={footerStyle}>
    <div className='mini-footer--left'>mini-footer--left</div>
    <div className='mini-footer--right'>mini-footer--right</div>
  </footer>
)

export default Footer
