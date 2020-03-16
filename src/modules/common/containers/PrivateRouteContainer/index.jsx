import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import routesConfig from 'routesConfig';

class PrivateRouteContainer extends Component {
  propTypes = {
    history: PropTypes.node,
    component: PropTypes.element,
  }

  componentDidMount() {
    const city = localStorage.getItem('city');
    if (city) {
      const { history } = this.props;
      history.push(routesConfig.weatherDetail.replace(':city', city));
    }
  }

  render() {
    const {
      component,
    } = this.props;
    const Comp = component;

    return (
      <Comp {...this.props} />
    );
  }
}

export default withRouter(PrivateRouteContainer);
