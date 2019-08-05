import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';

import Container from 'react-bootstrap/Container';
import Spinner from '../Spinner/Spinner';
import WidgetBody from './WidgetBody/WidgetBody';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

import './WeatherWidget.scss';

// API url
const API = 'https://dev-weather-api.azurewebsites.net/api/city';

class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesData: null, // data for dropdown
      isLoading: true, // page loading
      cityDataLoading: false, // city data loading
      activeCity: {
        // chosen city identifier
        id: null,
        name: null,
      },
      cityData: [], // chosen city weather data
      // index of active day for chosen city (chosen from multi day forecast)
      activeDayIndex: 0,
    };
  }

  componentDidMount() {
    // Fetching data with city names from API
    fetch(API)
      .then(res => res.json())
      // when success - assigning fetched data to proper state
      // and change page loading state to false for spinner hiding
      .then(data => this.setState({ citiesData: data, isLoading: false }))
      // if cannot fetch the data, setting 'citiesData` to null
      // and change page loading state to false
      .catch(() => this.setState({ citiesData: null, isLoading: false }));
  }

  // Handler triggered if city si chosen from dropdown list
  onSelectHandler = activeCity => {
    // setting actual date
    const date = moment().format('YYYY[-]MM[-]DD');
    // assigning chosen city name and id to state for further use
    // setting city data loading state to true
    this.setState({ activeCity, cityDataLoading: true });
    // reseting active day index - for default 'today' displaying
    this.setActiveDayIndex(0);
    // fetching data of chosen city from API
    fetch(`${API}/${activeCity.id}/weather?date=${date}`)
      .then(res => res.json())
      // when success - assigning city data o state
      // and setting city data loading state to false for spinner hiding
      .then(cityData => {
        this.setState({ cityData, cityDataLoading: false });
      })
      // if cannot fetch the data, setting 'cityData` to null
      // and change loading state to false
      .catch(() => this.setState({ cityData: null, cityDataLoading: false }));
  };

  // function to setting active (for example: clicked) day index
  setActiveDayIndex = activeDayIndex => {
    this.setState({ activeDayIndex });
  };

  // function to render spinner while page is loading
  renderSpinner = () => (
    <div className="widget-loader">
      <Spinner height="50px" />
    </div>
  );

  // function to render Weather Widget app
  renderWidget = () => {
    const {
      citiesData,
      activeCity,
      cityData,
      activeDayIndex,
      cityDataLoading,
    } = this.state;
    return (
      <Container fluid>
        <div className="weather-widget">
          <div className="weather-widget__header">
            <Container fluid>
              {/* App header - city name in dropdown form */}
              <CustomDropdown
                activeCity={activeCity}
                citiesData={citiesData}
                onSelectHandler={this.onSelectHandler}
                cityDataLoading={cityDataLoading}
              />
            </Container>
          </div>
          <div className="weather-widget__body">
            <Container fluid>
              {/* Widget body with weather data for chosen city */}
              <WidgetBody
                cityData={cityData}
                citiesData={citiesData}
                activeCity={activeCity}
                setActiveDayIndex={this.setActiveDayIndex}
                activeDayIndex={activeDayIndex}
                cityDataLoading={cityDataLoading}
                onSelectHandler={this.onSelectHandler}
              />
            </Container>
          </div>
        </div>
      </Container>
    );
  };

  // Function to render info when data cannot be fetch
  renderErrorInfo = () => (
    <div className="widget-no-data-info">Sorry, we cannot get cities list</div>
  );

  render() {
    const { isLoading, citiesData } = this.state;

    // if page is loading for the first time
    if (isLoading) {
      return this.renderSpinner();
    }
    // if data is fetched and everything is ok
    if (citiesData) {
      return this.renderWidget();
    }
    // if above conditions are not met - cannot fetch from API
    return this.renderErrorInfo();
  }
}

export default WeatherWidget;
