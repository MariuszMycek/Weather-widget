import React from 'react';
import PropTypes from 'prop-types';

import './Spinner.scss';

const Spinner = props => {
  const { height = '100%' } = props;
  return <img src="static/spinner.svg" alt="" style={{ height }} />;
};

Spinner.propTypes = {
  height: PropTypes.string,
};

export default Spinner;
