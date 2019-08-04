const withSass = require('@zeit/next-sass');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = withSass({
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://mariuszmycek.github.io/Weather-widget/'
      : '',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    config.plugins.push(new MomentLocalesPlugin());
    return config;
  },
});
