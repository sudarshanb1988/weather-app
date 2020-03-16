import React from 'react';

import ErrorBoundary from 'modules/common/components/ErrorBoundary';
import Header from 'modules/common/components/Header';
import cities from 'modules/common/apis/cities';

import WeatherDetailContainer from 'modules/weatherdetail/containers/WeatherDetailContainer';

function getCityObjFromSlug() {
  const citySlug = window.location.pathname.split('/')[1];
  const cityObj = cities.filter(city => city.slug === citySlug);

  return cityObj.length ? cityObj[0] : null;
}

function WeatherDetailPage() {
  const cityObj = getCityObjFromSlug();
  if (!cityObj) {
    window.location.replace('/');
    return null;
  }

  return (
    <ErrorBoundary>
      <div className="weather-detail-page">
        <Header title="Weather App" />
        <WeatherDetailContainer cityObj={cityObj} />
      </div>
    </ErrorBoundary>
  );
}

export default WeatherDetailPage;
