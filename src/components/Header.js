import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <nav className="clearfix">
      <ul>
        <li><NavLink to="/" activeClassName="is-active" exact>Home</NavLink></li>
        <li><NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink></li>
        <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
