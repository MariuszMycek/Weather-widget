import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Spinner from '../Spinner/Spinner';

import './CustomDropdown.scss';

// Modified React-Bootstrap dropdown
const CustomDropdown = ({
  activeCity,
  citiesData,
  onSelectHandler,
  cityDataLoading,
}) => {
  return (
    <div className="custom-dropdown">
      {/* Header/dropdown - City name  */}
      <DropdownButton
        variant="secondary"
        id="dropdown-basic-button"
        // checking if cities data is fetched
        title={activeCity.name === null ? 'Choose a city' : activeCity.name}
      >
        {/* Rendering all fetched city names */}
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
      {/* Displaying spinner while city data is loading */}
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
