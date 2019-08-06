import React from 'react';

import Spinner from 'shared/Spinner'; // eslint-disable-line

import './WidgetLoader.scss';

const WidgetLoader = () => (
  <div className="widget-loader">
    <Spinner height="50px" />
  </div>
);

export default WidgetLoader;
