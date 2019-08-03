import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './DayCard.scss';

const DayCard = ({ day, i, setActiveDayIndex }) => (
  <div className="day-card" onClick={() => setActiveDayIndex(i)}>
    {i === 0 ? (
      <span>Today</span>
    ) : (
      <span>{moment(day.date).format('dddd')}</span>
    )}
    <div className="day-card__weather-image">
      <img src={`/static/assets/images/${day.type}.png`} alt="weather icon" />
    </div>
    <span>{day.temperature}&deg;</span>
    <span>Pollen {day.pollenCount}</span>
  </div>
);

DayCard.propTypes = {
  day: PropTypes.object,
  i: PropTypes.number,
  setActiveDayIndex: PropTypes.func,
};

export default DayCard;
