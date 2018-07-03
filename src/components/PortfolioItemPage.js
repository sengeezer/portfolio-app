import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItemPage = props => (
  <div>
    <p>Portfolio item id: {props.match.params.id}</p>
    <p><Link to="/portfolio">Back to main portfolio page</Link></p>
  </div>
);

export default PortfolioItemPage;
