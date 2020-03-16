import React from 'react';

import ErrorBoundary from 'modules/common/components/ErrorBoundary';
import Header from 'modules/common/components/Header';
import SearchSectionContainer from 'modules/main/containers/SearchSectionContainer';

function HomePage() {
  return (
    <ErrorBoundary>
      <div className="home-page">
        <Header title="Weather App" />
        <SearchSectionContainer />
      </div>
    </ErrorBoundary>
  );
}

export default HomePage;
