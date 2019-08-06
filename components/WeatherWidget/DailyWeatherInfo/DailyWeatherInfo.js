import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import formatWeatherType from 'utils/formatWeatherType';

import BasicInfo from './BasicInfo';
import DetailedInfo from './DetailedInfo';

import './DailyWeatherInfo.scss';

const DailyWeatherInfo = props => {
  const { cityData, activeDayIndex } = props;

  // data for currently displayed day
  const dailyData = cityData[activeDayIndex];
  const date = moment(dailyData.date).format('dddd[, ]MMMM[ ]Do');
  const weatherType = formatWeatherType(dailyData.type);

  const basicInfoProps = {
    date,
    weatherType,
  };

  return (
    <div>
      <BasicInfo {...basicInfoProps} />
      <DetailedInfo dailyData={dailyData} />
    </div>
  );
};

DailyWeatherInfo.propTypes = {
  cityData: PropTypes.array,
  activeDayIndex: PropTypes.number,
};

export default DailyWeatherInfo;
