import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BasicInfo.scss';

const BasicInfo = props => {
  const { date, weatherType } = props;

  return (
    <Row className="basic-info">
      <Col className="basic-info__date-and-type">
        <span className="basic-info__date">{date}</span>
        <span className="basic-info__weather-type">{weatherType}</span>
      </Col>
    </Row>
  );
};

BasicInfo.propTypes = {
  date: PropTypes.string,
  weatherType: PropTypes.string,
};

export default BasicInfo;
