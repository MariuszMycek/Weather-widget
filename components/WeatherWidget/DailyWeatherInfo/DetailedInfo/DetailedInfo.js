import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './DetailedInfo.scss';

const DetailedInfo = props => {
  const { dailyData } = props;

  return (
    <Row className="detailed-info">
      <Col xs="6" className="img-and-temp">
        <div className="img-and-temp__weather-image">
          <img
            src={`static/assets/images/${dailyData.type}.png`}
            alt="weather icon"
          />
        </div>
        <div className="img-and-temp__temperature">
          <span className="temperature__count">{dailyData.temperature}</span>
          <span className="temperature__degree-type">&deg;C</span>
        </div>
      </Col>
      <Col xs="6" className="additional-info">
        <div className="additional-info__item-wrapper">
          <span className="additional-info__name">Precipitation:</span>
          <span className="additional-info__content">
            {dailyData.precipitation}%
          </span>
        </div>
        <div className="additional-info__item-wrapper">
          <span className="additional-info__name">Humidity:</span>
          <span className="additional-info__content">
            {dailyData.humidity}%
          </span>
        </div>
        <div className="additional-info__item-wrapper">
          <span className="additional-info__name">Wind:</span>
          <span className="additional-info__content">
            {dailyData.windInfo.speed} mph {dailyData.windInfo.direction}
          </span>
        </div>
        <div className="additional-info__item-wrapper">
          <span className="additional-info__name">Pollen Count:</span>
          <span className="additional-info__content">
            {dailyData.pollenCount}
          </span>
        </div>
      </Col>
    </Row>
  );
};

DetailedInfo.propTypes = {
  dailyData: PropTypes.object,
};

export default DetailedInfo;
