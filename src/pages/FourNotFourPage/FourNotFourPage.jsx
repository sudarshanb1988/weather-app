import React from 'react';
import ErrorBoundary from 'modules/common/components/ErrorBoundary';
import { NavLink } from 'react-router-dom';

export default function FourNotFourPage() {
  return (
    <ErrorBoundary>
      <div className="four-not-four-page">
        <div className="wrapper">
          <h1>404</h1>
          <h3>
            Not able to find the page you were looking for
            <span role="img" aria-label="dissapointed"> 😞 </span>
          </h3>
          <NavLink to="/">
            GO TO HOME PAGE
          </NavLink>
        </div>
      </div>
    </ErrorBoundary>
  );
}
