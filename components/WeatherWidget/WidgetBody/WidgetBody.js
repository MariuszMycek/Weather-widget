import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import DailyWeatherInfo from '../DailyWeatherInfo';
import MultiDayForecast from '../MultiDayForecast';

import './WidgetBody.scss';

const WidgetBody = props => {
  const { cityData, cityDataLoading } = props;

  // if there is a problem with fething chosen city data
  if (!cityDataLoading && !cityData) {
    return <div>Sorry, we cannot get city data</div>;
  }

  // if everything is ok - cityData is not null or empty array
  if (cityData && cityData.length) {
    return (
      <Container fluid>
        <div className="widget-body">
          <DailyWeatherInfo {...props} />
          <MultiDayForecast {...props} />
        </div>
      </Container>
    );
  }

  return null;
};

WidgetBody.propTypes = {
  cityData: PropTypes.array,
  cityDataLoading: PropTypes.bool,
};

export default WidgetBody;
