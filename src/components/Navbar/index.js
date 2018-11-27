import React from 'react';
import { Link } from 'react-router-dom'

import './styles.scss'

export default () => (
  <nav className="navbar">
    Navbar | <Link to='/'>Home222</Link> | <Link to='/about'>About</Link>
  </nav>
)
