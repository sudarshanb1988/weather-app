import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from 'modules/common/components/ErrorBoundary';
import { Row, Col, Card } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';


function WeatherDetailComponent(props) {
  const {
    city,
    weatherData
  } = props;

  return (
    <ErrorBoundary>
      <div className="weather-detail-component">
        <div className="title">
          Weather Forecast for &nbsp;
          {city}
        </div>
        <Row>
          {
            weatherData.length === 0
              ? (
                <div className="suspense-spinner-container">
                  <Spinner variant="primary" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              )
              : null
          }
          {
            weatherData.map((data, index) => {
              const {
                description,
                date,
                icon,
                highTemp,
                lowTemp
              } = data;

              return (
                <Col key={date} xs={12} sm={4} md={3} lg={2}>
                  <Card className={index === 0 ? 'today' : ''}>
                    <div>
                      <div>
                        <div className="day">{index === 0 ? 'TODAY' : null }</div>
                        <div className="date">{date}</div>
                      </div>
                      <div>
                        <img alt={`${description}`} src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} />
                      </div>
                      <div className="temp-section">
                        <span className="high">
                          {highTemp}
                          &#8451;
                        </span>
                        <span className="demark">/</span>
                        <span className="low">
                          {lowTemp}
                          &#8451;
                        </span>
                      </div>
                      <div className="description">
                        {description}
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </div>
    </ErrorBoundary>
  );
}

WeatherDetailComponent.propTypes = {
  city: PropTypes.string,
  weatherData: PropTypes.node,
};

export default WeatherDetailComponent;
