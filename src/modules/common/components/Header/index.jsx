import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from 'modules/common/components/ErrorBoundary';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import routesConfig from 'routesConfig';

function Header({ title }) {
  return (
    <ErrorBoundary>
      <div className="header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <NavLink to={routesConfig.root}>{title}</NavLink>
          </Navbar.Brand>
        </Navbar>
      </div>
    </ErrorBoundary>
  );
}
Header.propTypes = {
  title: PropTypes.string
};

export default Header;
