import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';

import Container from 'react-bootstrap/Container';
import Spinner from '../Spinner/Spinner';
import WidgetBody from './WidgetBody/WidgetBody';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

import './WeatherWidget.scss';

const API = 'https://dev-weather-api.azurewebsites.net/api/city';

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
      <Spinner height="50px" />
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
    return (
      <Container fluid>
        <div className="weather-widget">
          <div className="weather-widget__header">
            <Container fluid>
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
