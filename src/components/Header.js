import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav className="clearfix">
      <ul>
        <li><NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink></li>
        <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
        <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
