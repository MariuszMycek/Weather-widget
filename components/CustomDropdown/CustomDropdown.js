import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Spinner from '../Spinner/Spinner';

import './CustomDropdown.scss';

const CustomDropdown = ({
  activeCity,
  citiesData,
  onSelectHandler,
  cityDataLoading,
}) => {
  return (
    <div className="custom-dropdown">
      <DropdownButton
        variant="secondary"
        id="dropdown-basic-button"
        title={activeCity.name === null ? 'Choose a city' : activeCity.name}
      >
        {citiesData.map(city => (
          <Dropdown.Item
            key={city.id}
            onClick={() => onSelectHandler(city)}
            active={activeCity.id === city.id}
          >
            {city.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {cityDataLoading ? (
        <div className="custom-dropdown__spinner-wrapper">
          <Spinner height="100%" />
        </div>
      ) : null}
    </div>
  );
};

CustomDropdown.propTypes = {
  onSelectHandler: PropTypes.func,
  activeCity: PropTypes.object,
  citiesData: PropTypes.array,
  cityDataLoading: PropTypes.bool,
};

export default CustomDropdown;
