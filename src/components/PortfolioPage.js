import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h2>Portfolio main page</h2>
    <ul>
      <li><Link to="/portfolio/44">Item 44</Link></li>
      <li><Link to="/portfolio/77">Item 77</Link></li>
    </ul>
  </div>
);

export default PortfolioPage;
