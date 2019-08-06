import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

import '../styles/style.scss';

const defaultDescription = 'Example weather app';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
};

export default Head;
