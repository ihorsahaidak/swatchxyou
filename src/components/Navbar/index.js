import React from 'react';
import { Link } from 'react-router-dom'

import './styles.scss'

export default () => ( // TODO remove
  <nav className="navbar">
        <Link
            to={{
                  pathname: '/',
                  state: { prev: false },
            }}
            className="nav__link"
        >
              Home
        </Link>
        { ' . '}
        <Link
            to={{
                  pathname: '/start-building',
                  state: { prev: true },
            }}
            className="nav__link"
        >
              start-building
        </Link>
        { ' . '}
        <Link
            to={{
                  pathname: '/watch-model',
                  state: { prev: true },
            }}
            className="nav__link"
        >
              watch-model
        </Link>
        { ' . '}
        <Link
            to={{
                  pathname: '/watch-head',
                  state: { prev: true },
            }}
            className="nav__link"
        >
              watch-head
        </Link>
        { ' . '}
        <Link
            to={{
                  pathname: '/upper-strap',
                  state: { prev: true },
            }}
            className="nav__link"
        >
              upper-strap
        </Link>
        { ' . '}
        <Link
            to={{
                  pathname: '/lower-strap',
                  state: { prev: true },
            }}
            className="nav__link"
        >
              lower-strap
        </Link>
        { ' . '}
        <Link
            to={{
                  pathname: '/loop',
                  state: { prev: true },
            }}
            className="nav__link"
        >
              loop
        </Link>
        { ' . '}
        <Link
            to={{
                  pathname: '/accessories',
                  state: { prev: true },
            }}
            className="nav__link"
        >
              accessories
        </Link>
        { ' . '}
        <Link
            to={{
                  pathname: '/preview',
                  state: { prev: true },
            }}
            className="nav__link"
        >
              preview
        </Link>
        { ' . '}
        <Link
            to={{
                  pathname: '/about',
                  state: { prev: true },
            }}
            className="nav__link"
        >
              about
        </Link>
  </nav>
)
