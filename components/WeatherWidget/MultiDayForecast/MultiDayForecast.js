import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import DayCard from './DayCard';

import './MultiDayForecast.scss';

const MultiDayForecast = props => {
  const { setActiveDayIndex, cityData, activeDayIndex } = props;
  const otherProps = {
    setActiveDayIndex,
    activeDayIndex,
  };
  return (
    <div className="multi-day-forecast">
      <Row>
        {/* Rendering weather data for multi day forecast */}
        {cityData.map((day, i) => (
          <DayCard key={day.date} day={day} i={i} {...otherProps} />
        ))}
      </Row>
    </div>
  );
};

MultiDayForecast.propTypes = {
  cityData: PropTypes.array,
  setActiveDayIndex: PropTypes.func,
  activeDayIndex: PropTypes.number,
};

export default MultiDayForecast;
