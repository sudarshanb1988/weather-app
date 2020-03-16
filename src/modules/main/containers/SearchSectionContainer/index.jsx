import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from 'modules/common/components/ErrorBoundary';
import SearchSection from 'modules/main/components/SearchSection';

import routesConfig from 'routesConfig';

class SearchSectionContainer extends Component {
  propTypes = {
    history: PropTypes.node
  }

  constructor(props) {
    super(props);
    this.handleSearchSelection = this.handleSearchSelection.bind(this);
  }

  handleSearchSelection(option) {
    const { slug } = option[0];
    const { history } = this.props;

    localStorage.setItem('city', slug);
    history.push(routesConfig.weatherDetail.replace(':city', slug));
  }

  render() {
    return (
      <ErrorBoundary>
        <SearchSection onCitySelection={this.handleSearchSelection} />
      </ErrorBoundary>
    );
  }
}

export default withRouter(SearchSectionContainer);
