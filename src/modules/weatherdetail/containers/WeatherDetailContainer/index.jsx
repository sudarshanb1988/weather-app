import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from 'modules/common/components/ErrorBoundary';
import WeatherDetailComponent from 'modules/weatherdetail/components/WeatherDetailComponent';

import Alert from 'react-bootstrap/Alert';

import { getWeather } from 'modules/weatherdetail/apis';

class WeatherDetailContainer extends Component {
  propTypes = {
    cityObj: PropTypes.shape({
      city: PropTypes.string,
      coordinates: PropTypes.node,
      state: PropTypes.string,
      slug: PropTypes.string
    })
  }

  state = {
    weatherData: {
      data: [],
      error: false
    }
  }

  async componentDidMount() {
    const { cityObj } = this.props;
    try {
      const { data } = await getWeather(cityObj.coordinates[0], cityObj.coordinates[1]);
      this.setState({ weatherData: data, error: false });
    } catch (e) {
      this.setState({ error: true });
    }
  }

  getWeatherFormattedData() {
    const { weatherData, error } = this.state;
    if (error) {
      return (
        <ErrorBoundary>
          <div className="error-alert-container">
            <Alert variant="danger">
              Failed to fetch data from server
            </Alert>
          </div>
        </ErrorBoundary>
      );
    }
    if (!weatherData.data) return null;

    return weatherData.data.map(dt => ({
      date: dt.datetime,
      description: dt.weather.description,
      icon: dt.weather.icon,
      highTemp: dt.max_temp,
      lowTemp: dt.min_temp,
    })).slice(0, 11);
  }

  render() {
    const { cityObj } = this.props;
    const { city } = cityObj;
    const weatherData = this.getWeatherFormattedData();
    if (!weatherData) return null;

    return (
      <ErrorBoundary>
        <div className="weather-detail-container">
          <WeatherDetailComponent city={city} weatherData={weatherData} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default WeatherDetailContainer;
