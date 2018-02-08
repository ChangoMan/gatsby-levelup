import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header className="site-header">
    <h1>
      Grehg's Legs
    </h1>
    <nav>
        <ul className="menu">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about-me'}>About Me</Link></li>
        </ul>
    </nav>
  </header>
)

export default Header
