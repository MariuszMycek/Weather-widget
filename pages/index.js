import React from 'react';
import Head from '../components/Head';
import WeatherWidget from '../components/WeatherWidget';

const Home = () => (
  <div>
    <Head title="Weather Widget" />
    <WeatherWidget />
  </div>
);

export default Home;
