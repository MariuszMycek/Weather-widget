import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
  setActiveDayIndex,
  activeDayIndex,
  cityDataLoading,
}) => {
  if (!cityDataLoading && !cityData) {
    return <div>Sorry, we cannot get city data</div>;
  }

  if (cityData && cityData.length) {
    const dailyData = cityData[activeDayIndex];
    const date = moment(dailyData.date).format('dddd[, ]MMMM[ ]Do');
    const weatherType = formatType(dailyData.type);
    return (
      <div className="widget-body">
        <div className="daily-weather-info">
          <Row>
            <Col className="daily-weather-info__basic-info">
              <span className="daily-weather-info__date">{date}</span>
              <span className="daily-weather-info__weather-type">
                {weatherType}
              </span>
            </Col>
          </Row>
          <Row className="daily-weather-info__detailed-info">
            <Col xs="6" className="daily-weather-info__img-and-temp">
              <div className="daily-weather-info__weather-image">
                <img
                  src={`static/assets/images/${dailyData.type}.png`}
                  alt="weather icon"
                />
              </div>
              <div className="daily-weather-info__temperature">
                <span className="temperature__count">
                  {dailyData.temperature}
                </span>
                <span className="temperature__degree-type">&deg;C</span>
              </div>
            </Col>
            <Col xs="6" className="daily-weather-info__additional-info">
              <div className="daily-weather-info__additional-info-item-wrapper">
                <span className="daily-weather-info__additional-info-name">
                  Precipitation:{' '}
                </span>
                <span className="daily-weather-info__additional-info-content">
                  {dailyData.precipitation}%
                </span>
              </div>
              <div className="daily-weather-info__additional-info-item-wrapper">
                <span className="daily-weather-info__additional-info-name">
                  Humidity:{' '}
                </span>
                <span className="daily-weather-info__additional-info-content">
                  {dailyData.humidity}%
                </span>
              </div>
              <div className="daily-weather-info__additional-info-item-wrapper">
                <span className="daily-weather-info__additional-info-name">
                  Wind:{' '}
                </span>
                <span className="daily-weather-info__additional-info-content">
                  {dailyData.windInfo.speed} mph {dailyData.windInfo.direction}
                </span>
              </div>
              <div className="daily-weather-info__additional-info-item-wrapper">
                <span className="daily-weather-info__additional-info-name">
                  Pollen Count:{' '}
                </span>
                <span className="daily-weather-info__additional-info-content">
                  {dailyData.pollenCount}
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <div className="multi-day-forecast">
          <Row>
            {cityData.map((day, i) => (
              <DayCard
                key={day.date}
                day={day}
                i={i}
                setActiveDayIndex={setActiveDayIndex}
                activeDayIndex={activeDayIndex}
              />
            ))}
          </Row>
        </div>
      </div>
    );
  }

  return null;
};

WidgetBody.propTypes = {
  cityData: PropTypes.array,
  setActiveDayIndex: PropTypes.func,
  activeDayIndex: PropTypes.number,
  cityDataLoading: PropTypes.bool,
};

export default WidgetBody;
