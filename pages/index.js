import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import WeatherWidget from '..//components/WeatherWidget/WeatherWigdet';

const Home = () => (
  <div>
    <Head title="Weather Widget" />
    <WeatherWidget />
  </div>
);

export default Home;
