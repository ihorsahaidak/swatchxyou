import React from 'react';
import { Link } from 'react-router-dom'

import './styles.scss'

export default () => ( // TODO remove
  <nav className="navbar">
      <Link to='/'>home</Link>
      { ' . '}
      <Link to='/start-building'>start building</Link>
      { ' . '}
      <Link to='/watch-model'>watch model</Link>
      { ' . '}
      <Link to='/watch-head'>watch head</Link>
      { ' . '}
      <Link to='/upper-strap'>upper strap</Link>
      { ' . '}
      <Link to='/lower-strap'>lower strap</Link>
      { ' . '}
      <Link to='/loop'>loop</Link>
      { ' . '}
      <Link to='/accessories'>accessories</Link>
      { ' . '}
      <Link to='/preview'>preview</Link>
      { ' . '}
      <Link to='/about'>about</Link>
  </nav>
)
