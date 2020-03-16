import React, { Component } from 'react';

import { hot } from 'react-hot-loader/root';
import {
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import 'bootstrap';

import 'styles/app.scss';

import Spinner from 'react-bootstrap/Spinner';

import PrivateRouteContainer from 'modules/common/containers/PrivateRouteContainer';

import routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRoute = route => (
    <PrivateRouteContainer
      exact={route.exact}
      path={route.path}
      component={route.component} />
  );

  render() {
    return (
      <div className="weather-app">
        <BrowserRouter>
          <React.Suspense
            fallback={
              (
                <div className="suspense-spinner-container">
                  <Spinner variant="primary" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              )
            }>
            <Switch>
              {
                routes.map(route => this.renderRoute(route))
              }
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(App);
