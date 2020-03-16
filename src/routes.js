import React from 'react';
import routesConfig from 'routesConfig';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage.jsx'));
const WeatherDetailPage = React.lazy(() => import('./pages/WeatherDetailPage/WeatherDetailPage.jsx'));

const routes = [
  {
    path: routesConfig.root,
    component: HomePage,
    exact: true,
  },
  {
    path: routesConfig.weatherDetail,
    component: WeatherDetailPage,
    exact: true,
  }
];

export default routes;
