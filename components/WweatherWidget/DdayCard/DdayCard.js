import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './DayCard.scss';

const DayCard = ({ day, i, setActiveDayIndex, activeDayIndex }) => {
  // handling class names for Day Card in mobile view
  const dayCardWrapperStyle =
    activeDayIndex === i
      ? 'day-card-wrapper day-card-wrapper--active'
      : 'day-card-wrapper';
  // displaying "Today" if i(index) === 0, and week day name for other days
  const dayName = i === 0 ? 'Today' : moment(day.date).format('dddd');

  return (
    <Col xs="12" md className={dayCardWrapperStyle}>
      <div
        className="day-card"
        onClick={() => setActiveDayIndex(i)}
        role="button"
      >
        <Row noGutters>
          <Col xs="4" sm="3" md="12" className="day-card__item">
            <div className="day-card__day-name">{dayName}</div>
          </Col>
          <Col xs="3" sm="3" md="12" className="day-card__item">
            <div className="day-card__weather-image">
              <img
                src={`/static/assets/images/${day.type}.png`}
                alt="weather icon"
              />
            </div>
          </Col>
          <Col xs="2" sm="3" md="12" className="day-card__item">
            <div className="day-card__short-info-temp">
              <span>{day.temperature}&deg;</span>
            </div>
          </Col>
          <Col xs="3" sm="3" md="12" className="day-card__item">
            <div className="day-card__short-info-pollen">
              <span className="short-info-pollen__name">Pollen </span>
              <span className="short-info-pollen__count">
                {day.pollenCount}
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

DayCard.propTypes = {
  day: PropTypes.object,
  i: PropTypes.number,
  setActiveDayIndex: PropTypes.func,
  activeDayIndex: PropTypes.number,
};

export default DayCard;
