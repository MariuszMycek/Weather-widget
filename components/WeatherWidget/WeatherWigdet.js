import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';

import Container from 'react-bootstrap/Container';
import WidgetLoadingError from './WidgetLoadingError';
import WidgetLoader from './WidgetLoader';
import WidgetBody from './WidgetBody';
import WidgetHeader from './WidgetHeader';

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
      .then(data => this.setState({ citiesData: data }))
      // if cannot fetch the data, setting 'citiesData` to null
      // and change page loading state to false
      .catch(() => this.setState({ citiesData: null }))
      .finally(() => this.setState({ isLoading: false }));
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
      .then(cityData => {
        this.setState({ cityData });
      })
      // if cannot fetch the data, setting 'cityData` to null
      // and change loading state to false
      .catch(() => this.setState({ cityData: null }))
      .finally(() => this.setState({ cityDataLoading: false }));
  };

  // function to setting active (for example: clicked) day index
  setActiveDayIndex = activeDayIndex => {
    this.setState({ activeDayIndex });
  };

  // function to render Weather Widget app
  renderWidget = () => {
    return (
      <Container fluid>
        <div className="weather-widget">
          {/* App header - city name in dropdown form */}
          <WidgetHeader
            {...this.state}
            onSelectHandler={this.onSelectHandler}
          />
          {/* Widget body with weather data for chosen city */}
          <WidgetBody
            {...this.state}
            setActiveDayIndex={this.setActiveDayIndex}
            onSelectHandler={this.onSelectHandler}
          />
        </div>
      </Container>
    );
  };

  render() {
    const { isLoading, citiesData } = this.state;

    // if page is loading for the first time
    if (isLoading) {
      return <WidgetLoader />;
    }
    // if data is fetched and everything is ok
    if (citiesData) {
      return this.renderWidget();
    }
    // if above conditions are not met - cannot fetch from API
    return <WidgetLoadingError />;
  }
}

export default WeatherWidget;
