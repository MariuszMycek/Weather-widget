import React from 'react';
import PropTypes from 'prop-types';

import './Spinner.scss';

const Spinner = ({ height }) => (
  <img src="static/spinner.svg" alt="" style={{ height }} />
);

Spinner.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Spinner;
