import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DayCard from '../DayCard/DayCard';

import './WidgetBody.scss';

function formatType(type) {
  const withSpace =
    type !== 'RainLight'
      ? type.replace(/([a-z])(?=[A-Z])/g, '$1 ')
      : type
          .replace(/([a-z])(?=[A-Z])/g, '$1 ')
          .split(' ')
          .reverse()
          .join(' ');

  const toLowerCase = withSpace.toLowerCase();
  const capitalized =
    toLowerCase.charAt(0).toUpperCase() + toLowerCase.slice(1);
  return capitalized;
}

const WidgetBody = ({
  cityData,
  activeCity,
  setActiveDayIndex,
  activeDayIndex,
  cityDataLoading,
}) => {
  if (!cityDataLoading && !cityData) {
    return <div>Sorry, we cannot get city data</div>;
  }

  if (cityData.length) {
    const dailyData = cityData[activeDayIndex];
    const date = moment(dailyData.date).format('dddd[, ]MMMM[ ]Do');
    const weatherType = formatType(dailyData.type);
    return (
      <div className="widget-body">
        <Container fluid>
          <Row>
            <Col>
              <h2 className="widget-body__city-name">{activeCity.name}</h2>
            </Col>
          </Row>
          <div className="daily-weather-info">
            <Row>
              <Col className="daily-weather-info__basic-info">
                <span>{date}</span>
                <span>{weatherType}</span>
              </Col>
            </Row>
            <Row className="daily-weather-info__detailed-info">
              <Col className="daily-weather-info__img-and-temp">
                <div className="daily-weather-info__weather-image">
                  <img
                    src={`/static/assets/images/${dailyData.type}.png`}
                    alt="weather icon"
                  />
                </div>
                <div className="daily-weather-info__temperature">
                  {dailyData.temperature} <span>&deg;F</span>
                </div>
              </Col>
              <Col className="daily-weather-info__additional-info">
                <span className="daily-weather-info__additional-info-item">
                  Precipitation: {dailyData.precipitation}%
                </span>
                <span className="daily-weather-info__additional-info-item">
                  Humidity: {dailyData.humidity}%
                </span>
                <span className="daily-weather-info__additional-info-item">
                  Wind: {dailyData.windInfo.speed} mph{' '}
                  {dailyData.windInfo.direction}
                </span>
                <span className="daily-weather-info__additional-info-item">
                  Pollen Count: {dailyData.pollenCount}
                </span>
              </Col>
            </Row>
          </div>
          <div className="multi-day-forecast">
            <Row>
              {cityData.map((day, i) => (
                <Col key={day.date} xs="12" md>
                  <DayCard
                    day={day}
                    i={i}
                    setActiveDayIndex={setActiveDayIndex}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    );
  }

  return null;
};

WidgetBody.propTypes = {
  cityData: PropTypes.array,
  activeCity: PropTypes.object,
  setActiveDayIndex: PropTypes.func,
  activeDayIndex: PropTypes.number,
  cityDataLoading: PropTypes.bool,
};
export default WidgetBody;
