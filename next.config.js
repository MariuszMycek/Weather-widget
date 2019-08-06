const withSass = require('@zeit/next-sass');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const path = require('path');

module.exports = withSass({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    config.plugins.push(new MomentLocalesPlugin());
    config.resolve = {
      alias: {
        utils: path.resolve(__dirname, 'utils'),
        styles: path.resolve(__dirname, 'styles'),
        shared: path.resolve(__dirname, 'components/shared'),
      },
    };
    return config;
  },
});
