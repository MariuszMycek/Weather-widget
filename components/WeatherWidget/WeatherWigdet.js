import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Spinner from '../Spinner/Spinner';
import WidgetBody from './WidgetBody/WidgetBody';

import './WeatherWidget.scss';

const API = 'http://dev-weather-api.azurewebsites.net/api/city';

class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesData: null,
      isLoading: true,
      cityDataLoading: false,
      activeCity: {
        id: null,
        name: null,
      },
      cityData: [],
      activeDayIndex: 0,
    };
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({ citiesData: data, isLoading: false }))
      .catch(() => this.setState({ citiesData: null, isLoading: false }));
  }

  onSelectHandler = activeCity => {
    const date = moment().format('YYYY[-]MM[-]DD');
    this.setState({ activeCity, cityDataLoading: true });
    this.setActiveDayIndex(0);
    fetch(`${API}/${activeCity.id}/weather?date=${date}`)
      .then(res => res.json())
      .then(cityData => {
        this.setState({ cityData, cityDataLoading: false });
      })
      .catch(() => this.setState({ cityData: null, cityDataLoading: false }));
  };

  setActiveDayIndex = activeDayIndex => {
    this.setState({ activeDayIndex });
  };

  renderSpinner = () => (
    <div className="widget-loader">
      <Spinner height={50} />
    </div>
  );

  renderWidget = () => {
    const {
      citiesData,
      activeCity,
      cityData,
      activeDayIndex,
      cityDataLoading,
    } = this.state;
    console.log(this.state.cityData);
    return (
      <Container fluid>
        <div className="weather-widget">
          <DropdownButton
            id="dropdown-basic-button"
            title="Choose a city "
            variant="info"
          >
            {citiesData.map(city => (
              <Dropdown.Item
                key={city.id}
                onClick={() => this.onSelectHandler(city)}
                active={activeCity.id === city.id}
              >
                {city.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          {cityDataLoading ? (
            <div className="weather-widget__spinner-wrapper">
              <Spinner height={26} />
            </div>
          ) : null}
          <div className="weather-widget__widget-body-wrapper">
            <WidgetBody
              cityData={cityData}
              activeCity={activeCity}
              setActiveDayIndex={this.setActiveDayIndex}
              activeDayIndex={activeDayIndex}
              cityDataLoading={cityDataLoading}
            />
          </div>
        </div>
      </Container>
    );
  };

  renderErrorInfo = () => (
    <div className="widget-no-data-info">Sorry, we cannot get cities list</div>
  );

  render() {
    const { isLoading, citiesData } = this.state;

    if (isLoading) {
      return this.renderSpinner();
    }
    if (citiesData) {
      return this.renderWidget();
    }
    return this.renderErrorInfo();
  }
}

export default WeatherWidget;
