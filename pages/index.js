import React from 'react';
import Head from '../components/head';
import WeatherWidget from '..//components/WeatherWidget/WeatherWigdet';

const Home = () => (
  <div>
    <Head title="Weather Widget" />
    <WeatherWidget />
  </div>
);

export default Home;
