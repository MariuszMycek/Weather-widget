import React from 'react';

import Container from 'react-bootstrap/Container';
import CustomDropdown from 'shared/CustomDropdown'; // eslint-disable-line

import './WidgetHeader.scss';

const WidgetHeader = props => (
  <div className="widget-header">
    <Container fluid>
      <CustomDropdown {...props} />
    </Container>
  </div>
);

export default WidgetHeader;
